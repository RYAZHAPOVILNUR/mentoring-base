import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { Todo } from '../../../interfaces/todo.interface';
import { TodosService } from '../../../services/todos.service';
import { CreateTodoFormComponent } from '../../forms/create-todo-form/create-todo-form.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todos-list',
    imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
  readonly todosService = inject(TodosService);

  public readonly todos$: Observable<Todo[]> = this.todosService.todos$;

  ngOnInit() {
    const todos = localStorage.getItem('todos');
    todos
      ? this.todosService.setTodos(JSON.parse(todos))
      : this.todosService.todosApiService.getTodos().subscribe((todos) => {
          this.todosService.setTodos(todos);
          this.todosService.updateLocalStorage(todos);
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
