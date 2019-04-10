import { Component } from '@angular/core';

@Component({
  selector: 'rt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [];
  create(task) {
    this.todos.push({ id: Date.now, task });
  }
}
