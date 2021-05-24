import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'outputproperty',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.css']
})
export class OutputpropertyComponent {

  @Input()
  person: any 
}
