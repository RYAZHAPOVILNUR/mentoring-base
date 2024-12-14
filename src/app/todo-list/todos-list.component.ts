import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {TodosApiService} from "../todos-api.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {TodosService} from "../todos.service";
import {CreateTodoFormComponent} from "../create-todo-form/create-todo-form.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todos-list.component.html',
  imports: [NgForOf, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)
  readonly todoService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: any)=> {
        this.todoService.setUsers(response);
      }
    )
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  public createTodo(formData: any) {
    this.todoService.createTodo({
      id: new Date().getTime(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    });
    console.log('ДАННЫЕ ФОРМЫ: ', event);
    console.log(new Date().getTime());
  }
}
