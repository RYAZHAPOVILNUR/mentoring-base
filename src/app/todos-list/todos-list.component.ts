import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { Todo } from '../interfaces/todo.interface';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {
  readonly todosService = inject(TodosService);

  public readonly todos$: Observable<Todo[]> = this.todosService.todos$;

  ngOnInit() {
    this.todosService.todosApiService.getTodos().subscribe((todos) => {
      this.todosService.setTodos(todos);
    });
  }

  createTodo(formData: Todo) {
    this.todosService.createTodo({
      userId: formData.userId,
      id: new Date().getTime(),
      title: formData.title,
      completed: formData.completed,
    });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
}
