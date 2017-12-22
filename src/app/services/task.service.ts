import {Injectable} from '@angular/core';
import {Task} from '../models/task';

@Injectable()
export class TaskService {
  public getTasks(): Promise<Task[]> {
    return Promise.resolve([
      {id: 1, name: 'DO something 1'},
      {id: 2, name: 'DO something 2'},
    ]);
  }
}
