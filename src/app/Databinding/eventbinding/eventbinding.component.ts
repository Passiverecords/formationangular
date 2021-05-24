import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent  {

 onClick()
 {
   console.log('button clicked');
 }

}
