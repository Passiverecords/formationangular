import { Post } from './post.model';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  status = true ;
  posts :  Array<Post>= [];

  post : Post = {
    id : 0,
    title : '',
    body : '',
    userId : '',
  };


  constructor(private http : HttpClient, private postService : PostService) {

  }

  ngOnInit() {
   this.getPosts();
  }


  getPosts()
  {
     this.postService.getScheduleStoreInfo()
    .subscribe( response =>
      {
        this.posts = response
      }, error  => {
        alert('erreur inattendue');
        console.log(error);
      })
  }

  createPost()
  {
this.postService.createPost(this.post)
.subscribe(response =>
  {
    this.posts.unshift(this.post)
    this.posts.push (this.post);

    this.post =  {
      id : 0,
      title : '',
      body : '',
      userId : '',
    }

  }, error  => {
    alert('erreur inattendue');
    console.log(error);
  })
  }
  editPost(post){
    this.post = post ;
    this.status = false ;

  }
  updatePost(post)
  {
    this.postService.updatePost(this.post)
    .subscribe( response =>
      {
        this.post = {
          id : 0,
          title : '',
          body : '',
          userId : ''
        }
        this.status = true ;
      }, error  => {
        alert('erreur inattendue');
        console.log(error);
      })
  }

  deletePost(post)
  {
    this.postService.deletePost(123)
    .subscribe(response =>
      {
      let index = this.posts.indexOf(post);
      this.posts.slice(index, 1);
      }, (error : Response)  => {
        if(error.status === 404)
        {
          alert('ce post déjà supprimé !! ');
        } else {
          alert('erreur inattendue');
          console.log(error);
        }

      })

  }
 /*
  getTitle()
  {
    this.http.get<Array<Post>>(this.Urlapi)
    .pipe(
      map( (response <Post>) =>
      response.map( post => {

      }
      return {
        id : data.id
        title : DataTransfer.title ;
      }
      )
      ).subscribe(console.log);
    )
  }
 */


}
