import { Component } from '@angular/core';


// decide how the component is used in run time
@Component({
  selector: 'app-hello-world', 
  template: '<h1>{{title}}</h1>',
  styles: [`
  h1{
    color:blue;
  }`]
})

export class HelloWroldComponent{
  title = 'Hello World'

}
