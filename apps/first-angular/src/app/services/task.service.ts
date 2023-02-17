import { Injectable } from '@angular/core';
import { TASKS } from './../mock-tasks'
import { Task } from './../Task';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
  
export class TaskService {
  private apiUrl = "http://localhost:3000/tasks"

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    // httpClient returns observable automatically
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> { 
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions )
  }
}