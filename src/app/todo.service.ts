import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
