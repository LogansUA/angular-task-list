import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Task} from '../models/task';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;
  name: FormControl;
  description: FormControl;
  liveTime: FormControl;

  @Output() addTask = new EventEmitter<Task>();

  public constructor() {
  }

  public onSubmit() {
    if (this.form.valid) {
      const {name, description, liveTime = 5} = this.form.value;

      this.addTask.emit(new Task(name, description, liveTime));

      this.form.reset();
    }
  }

  public ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  public createForm() {
    this.form = new FormGroup({
      name: this.name,
      description: this.description,
      liveTime: this.liveTime,
    });
  }

  public createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.description = new FormControl('', [
      Validators.minLength(8),
    ]);
    this.liveTime = new FormControl(5, [
      Validators.min(1),
    ]);
  }
}
