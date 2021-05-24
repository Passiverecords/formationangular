import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdatabyservice',
  templateUrl: './getdatabyservice.component.html',
  styleUrls: ['./getdatabyservice.component.css']
})
export class GetdatabyserviceComponent implements OnInit {
 title : "list des cours";
  courses ;
  constructor(coursesService : CoursesService) { 
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

}
