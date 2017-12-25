import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TaskComponent} from './task/task.component';
import {TaskFormComponent} from './task-form/task-form.component';
import {TaskListComponent} from './task-list/task-list.component';

import {TaskService} from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskFormComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
