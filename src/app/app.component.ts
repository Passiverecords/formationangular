import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // data Input output 
  body = 'azul paris ' ;
  title = 'AngularInputOutput';
  public friend= '' ;

  characters = [ {name:'mickey', lastname:'mouse'},
  {name:'donald',lastname:'duck'},
  {name:'pat', lastname:'hibulaire'}]
  public friendAge = 25 ;
}
