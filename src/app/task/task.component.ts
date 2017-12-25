import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Task} from '../models/task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input('task') task: Task;

  @Output() deleteTask = new EventEmitter<Task>();

  public delete(task: Task): void {
    this.deleteTask.emit(task);
  }
}
