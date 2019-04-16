import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Todo } from './todo';

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
    this.todoService.saveTodo(this.todo).subscribe(todo => {
      this.todoList.unshift(todo);
      this.todoForm.controls.task.reset();
    });
  }

  private getAllTodos() {
    this.todoService
      .getAllTodos()
      .pipe(
        map(todos =>
          todos.sort(
            (a: Todo, b: Todo) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        )
      )
      .subscribe(todos => (this.todoList = todos));
  }

  get todo() {
    return { task: this.task };
  }

  deleteTodo(id: number) {
    this.todoService.delete(id).subscribe(s => {
      this.todoList = this.todoList.filter(t => t._id !== id);
    });
  }

  get task() {
    return this.todoForm.get('task').value;
  }
}
