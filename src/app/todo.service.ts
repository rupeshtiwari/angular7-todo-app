import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  apiUrl = '/api/todos/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  saveTodo(todo) {
    return this.http.post(`${this.apiUrl}save`, todo, this.httpOptions);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get(`${this.apiUrl}all`) as any;
  }
}
