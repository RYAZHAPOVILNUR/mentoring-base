import { Component, inject } from '@angular/core';
import { ToDoApiService } from '../services/to-do-api.service';
import { NgFor } from '@angular/common';
import { ToDoCardComponent } from "./to-do-card/to-do-card.component";



export interface ToDOs {
  userId:    number;
  id:        number;
  title:     string;
  completed: boolean;
}


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgFor, ToDoCardComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  ToDo: ToDOs[] = []
  ToDoApi = inject(ToDoApiService)

  constructor() {
    this.ToDoApi.getToDo().subscribe(
      (response: any) => {this.ToDo = response}
    )
  }

  deleteToDo(id:number) {
    this.ToDo = this.ToDo.filter(
      item => {
        if (id === item.id)
          return false
        else return true
      }
    )
  }
 
}

