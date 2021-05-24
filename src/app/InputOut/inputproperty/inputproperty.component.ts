import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inputproperty',
  templateUrl: './inputproperty.component.html',
  styleUrls: ['./inputproperty.component.css']
})
export class InputpropertyComponent {

  characters = [ {name:'mickey', lastname:'mouse'},
  {name:'donald',lastname:'duck'},
  {name:'pat', lastname:'hibulaire'}]
  

}
