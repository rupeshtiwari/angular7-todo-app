import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'rt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoForm: FormGroup;
  todoList = [];
  id = 1;

  constructor(private todoService: TodoService) {
    this.todoForm = new FormGroup({
      task: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  ngOnInit() {
    this.getAllTodos();
  }

  getErrorMessage() {
    const taskForm = this.todoForm.controls.task;

    return taskForm.hasError('required')
      ? 'You must enter a task'
      : taskForm.hasError('minlength')
      ? 'Put more text'
      : '';
  }

  create() {
    this.todoService
      .saveTodo(this.todo)
      .subscribe(todo => this.todoList.push(todo));
  }

  private getAllTodos() {
    this.todoService.getAllTodos().subscribe(todos => (this.todoList = todos));
  }

  get todo() {
    return { task: this.task };
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(t => t._id !== id);
  }

  get task() {
    return this.todoForm.get('task').value;
  }
}
