import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  monObservable : Observable<any>;
  mesImages = [
    'as3.png',
    'as2.png',
    'as.png',
    'as4.png'
  ]
  currentImage : any ;
  constructor() { }

  ngOnInit() {


    new Observable(observer => {
      let i = this.mesImages.length - 1 ;

      setInterval(() => {
        observer.next(this.mesImages[i]);
        if(i>0)
        {
          i-- ;
        }
        else {
          i = this.mesImages.length - 1 ;
        }
      }, 5000);
          
  }).subscribe(result => {
   this.currentImage = result ;
   console.log("currentImage");
 });
   
  }

}
