import {Component, OnInit} from '@angular/core';
import {Task} from '../models/task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  public constructor(private taskService: TaskService) {
  }

  public addTask(task: Task): void {
    this.tasks.push(task);

    setTimeout(() => {
      this.deleteTask(task);
    }, task.getLiveTime());
  }

  public deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(value => value !== task);
  }

  public getTasks(): void {
    this.taskService.getTasks()
      .then((tasks) => {
        this.tasks = tasks;

        this.tasks.forEach((task: Task) => {
          const timeout: number = task.liveTime * 1000;

          setTimeout(() => {
            this.deleteTask(task);
          }, timeout);
        });
      });
  }

  public ngOnInit(): void {
    this.getTasks();
  }
}
