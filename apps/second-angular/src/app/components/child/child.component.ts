import { Component, Input,Output,EventEmitter,ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() childMessage!: string
  @Output() outputEvent = new EventEmitter<string>()

  message: string = 'test for @ViewChild from child component'


  sendMessage() {
    this.outputEvent.emit('test for @Output(outputEvent) in child component!')
  }

}
