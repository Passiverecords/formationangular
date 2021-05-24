import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './posts/post.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  post : Post = {
    id : 0,
    title : '',
    body : '',
    userId : '',
  };



  constructor(private http : HttpClient) {

   }
   private Urlapi = "https://api-recette.idkids.com/v1/sites";

   getScheduleStoreInfo(): Observable<Post[]> {
     // const headers = new HttpHeaders().set('storeCode', '');
     const httpHeaders = new HttpHeaders({
       'custom-header': 'test',
       // Autorization: apiIdkidsUrl.sites_apikey,
     });
     return this.http.get<Post[]>(this.Urlapi, {
       headers: httpHeaders,
     });
   }
   

   getPosts(){
    return this.http.get<Array<Post>>(this.Urlapi);
   }

   createPost(post)
   {
    return this.http.post(this.Urlapi,post);
   }

   updatePost(post){
     return this.http.put(this.Urlapi+'/'+this.post.id, post);

   }
   deletePost(post){
    return this.http.delete(this.Urlapi+'/'+this.post.id);

  }

   getPosttitle()
   {
     return this.http.get<Array<Post>>(this.Urlapi);

   }
/*
   deletePost(post)
   {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/'+this.post.id);

   }
   */
}


