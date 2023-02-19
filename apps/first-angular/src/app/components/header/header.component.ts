import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
  
export class HeaderComponent {
  title: string = 'my first angular app';
  showAddTask: boolean = true;
  subscription!: Subscription
  
  constructor(private uiService: UiService) {
    // the value here is the showAddTask variable value from uiService
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

}
