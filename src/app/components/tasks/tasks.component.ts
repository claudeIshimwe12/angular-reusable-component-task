import {  Component } from '@angular/core';
import { TASKS } from '../../../db.data';
import { Task } from '../../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = TASKS
}
