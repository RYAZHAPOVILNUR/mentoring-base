import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { Todo } from '../../../interfaces/todo.interface';
import { CreateTodoFormComponent } from '../../forms/create-todo-form/create-todo-form.component';
import { Observable } from 'rxjs';
import { TodosApiService } from '../../../services/api-services/todos-api.service';
import { TodosActions } from './store/todos.action';
import { Store } from '@ngrx/store';
import { selectTodos } from './store/todos.selector';

@Component({
  selector: 'app-todos-list',
  imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {
  readonly todosApiService = inject(TodosApiService);
  private readonly store = inject(Store);
  public readonly todos$: Observable<Todo[]> = this.store.select(selectTodos);

  ngOnInit() {
    this.todosApiService.getTodos().subscribe((todos) => {
      this.store.dispatch(TodosActions.set({ todos: todos }));
    });
  }

  createTodo(formData: Todo) {
    this.store.dispatch(
      TodosActions.create({
        todo: {
          userId: formData.userId,
          id: new Date().getTime(),
          title: formData.title,
          completed: formData.completed,
        },
      })
    );
  }

  deleteTodo(id: number) {
    this.store.dispatch(TodosActions.delete({ id: id }));
  }
}
