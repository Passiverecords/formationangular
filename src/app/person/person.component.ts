import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent  {

  @Input('parentData') public friendAge ;
  //person: any
  @Output() public friendName = new EventEmitter();

  eventName()
  {
    this.friendName.emit('Justine');
  }

}