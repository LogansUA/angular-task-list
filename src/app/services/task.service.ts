import {Injectable} from '@angular/core';
import {Task} from '../models/task';

@Injectable()
export class TaskService {
  public getTasks(): Promise<Task[]> {
    const tasks: Task[] = [];

    tasks.push(new Task('First task', 'First example description', 5));
    tasks.push(new Task('Second task', 'Second example description', 15));
    tasks.push(new Task('Third task', 'Third example description', 25));

    return Promise.resolve(tasks);
  }
}
