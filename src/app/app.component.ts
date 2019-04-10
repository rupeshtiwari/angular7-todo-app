import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'rt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoForm: FormGroup;
  todoList = [];
  id = 1;
  constructor() {
    this.todoForm = new FormGroup({
      task: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
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
    this.todoList.push({ id: this.id++, task: this.task });
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(t => t.id !== id);
  }

  get task() {
    return this.todoForm.get('task').value;
  }
}
