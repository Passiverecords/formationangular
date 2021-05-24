import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): string[] {
    return ['Laravel','Symfony','Angaulr','Nodsjs','Vuejs','Spring'];
  }
}
