import {Component, Input} from '@angular/core';

import {Task} from '../models/task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task: Task;
}
