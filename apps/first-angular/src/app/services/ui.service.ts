import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false
  private subject = new Subject<any>()

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask
    // pass the showAddTask value to another component
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
