import {Injectable} from '@angular/core';
import {Task} from '../models/task';

@Injectable()
export class TaskService {
  public addTask(object) {
    console.log(object);
    let {name} = object;

    name = name.trim();

    const task = new Task(name);

    // task.id = this.tasks.length + 1;
    // task.name = name;

    // this.tasks.push(task);
  }

  public getTasks(): Promise<Task[]> {
    return Promise.resolve([
      {id: 1, name: 'DO something 1'},
      {id: 2, name: 'DO something 2'},
    ]);
  }
}
