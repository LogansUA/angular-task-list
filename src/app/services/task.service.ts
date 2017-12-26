import {Injectable} from '@angular/core';
import {Task} from '../models/task';

@Injectable()
export class TaskService {
  public getTasks(): Promise<Task[]> {
    return Promise.resolve([
      {id: 1, name: 'First task', liveTime: 5},
      {id: 2, name: 'Second task', liveTime: 5},
      {id: 3, name: 'Third task', liveTime: 5},
    ]);
  }
}
