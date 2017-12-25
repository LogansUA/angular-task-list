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

  @Output() addTask = new EventEmitter<Task>();

  public constructor() {
  }

  public onSubmit() {
    if (this.form.valid) {
      this.addTask.emit(new Task(this.form.value.name));

      this.form.reset();
    }
  }

  public ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  public createForm() {
    this.form = new FormGroup({
      name: this.name
    });
  }

  public createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
  }
}
