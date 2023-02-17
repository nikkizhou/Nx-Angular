import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'my first angular app';

  toggleAddTask() {
    console.log("tottle in header component");
  }

}
