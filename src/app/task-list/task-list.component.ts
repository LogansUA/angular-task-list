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

  public addTask(name): void {
    name = name.trim();

    const task = new Task();

    task.id = this.tasks.length + 1;
    task.name = name;

    this.tasks.push(task);
  }

  public deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(value => value !== task);
  }

  public getTasks(): void {
    this.taskService.getTasks()
      .then((tasks) => {
        this.tasks = tasks;
      });
  }

  public ngOnInit(): void {
    this.getTasks();
  }
}