import { Injectable } from '@angular/core';
import { Task } from './../Task';
import { catchError, Observable, of, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization':"My api key"
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
      .pipe(catchError(
        err => {
          console.log(err)
          return throwError(() => new Error('Error getting tasks'))
        }
      ))
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> { 
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions )
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
    
  }
}
