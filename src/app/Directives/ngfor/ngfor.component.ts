import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  courses = [
    {id : 1, title : "Laravel"},
    {id : 2, title : "Angular"},
    {id : 3, title : "Symfony"},
    {id : 4, title : "ReactJs"},
    {id : 5, title : "Spring"},
  ]

}
