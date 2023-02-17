import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
  
  
export class TasksComponent {
  tasks: Task[] = []
  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void{
    // the subscribe here is a promise?
    this.taskService.getTasks().subscribe((tasks)=>this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () =>this.tasks = this.tasks.filter(t => t.id != task.id));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }



}
