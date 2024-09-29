import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../todos.service';
import { CreateTodosFormComponent } from '../create-todos-form/create-todos-form.component';

@Component({
  selector: 'app-todos-list.component',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodosFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-list.component.component.html',
  styleUrl: './todos-list.component.component.scss',
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response);
    });
  }
  //*MARK:delete-method
  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }

  public createTodos(formData: any) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      title: formData.title,
      userId: formData.userId,
      completed: formData.completed,
    });
    console.log('ДАННЫЕ ФОРМЫ: ', formData);
    console.log(new Date().getTime());
  }
}
