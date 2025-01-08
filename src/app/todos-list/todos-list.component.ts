import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { AsyncPipe, NgFor } from '@angular/common';
import { Todo } from './todos-interface';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [TodoCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
   readonly todosApiService = inject(TodosApiService);
   readonly todosService = inject(TodosService);


    constructor() {
      this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
          this.todosService.setTodos(response);
        }
      )

      this.todosApiService.getTodos().subscribe(
        todo => console.log(todo))
    }

    deleteTodo(id: number) {
      this.todosService.deleteTodo(id)
    }

    public createTodo(formData: Todo) {
      this.todosService.createTodo({
        id: new Date().getTime(),
        userId: formData.userId,
        title: formData.title,
        completed: formData.completed
      });
    }
}
