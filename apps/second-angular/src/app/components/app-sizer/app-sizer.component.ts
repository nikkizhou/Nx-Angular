import { Component, Input, Output, EventEmitter } from '@angular/core';
import { deflate } from 'zlib';

@Component({
  selector: 'app-sizer',
  templateUrl: './app-sizer.component.html',
  styleUrls: ['./app-sizer.component.css'],
})
export class AppSizerComponent {

  @Input() size!: number
  @Output() sizeChange = new EventEmitter<number>()

  dec = () => this.resize(-1)
  inc = () => this.resize(+1)

  resize(value: number) {

    this.size = this.size + value
    console.log(this.size);
    
    this.sizeChange.emit(this.size)
  }
}
