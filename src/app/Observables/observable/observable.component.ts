import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  monObservable : Observable<any>;
  mesImages = [
    'as.png',
    'as1.png',
    'as2.png',
    'as3.png'
  ]
 currentImage : any ;

 orderStatus : any ;
 data : Observable<any> ;
  constructor() { }

  ngOnInit() : void {
   
   
   new Observable(observer=> {
     
     setTimeout(() => {
       observer.next("In Progress");
     }, 2000);

     setTimeout(() => {
      observer.next("Processing");
    }, 5000);

    setTimeout(() => {
      observer.next("Completed");
    }, 8000);

   }).subscribe(val => {
     this.orderStatus = val ;
   });
   
   
  }
  }

