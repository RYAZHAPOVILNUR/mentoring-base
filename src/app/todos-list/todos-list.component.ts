import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { Todo } from '../interfaces/todo-interface';
import { Store } from '@ngrx/store';
import { TodosActions } from './store/todos.actions';
import { selectTodos } from './store/todos.selectors';

@Component({
  standalone: true,
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  imports: [TodoCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);

  deleteTodo(id: number) {
    this.store.dispatch(TodosActions.delete({ id }));
  }

  createNewTodo(formData: Todo) {
    this.store.dispatch(
      TodosActions.create({
        todo: {
          ...formData,
          id: Date.now(),
        },
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(TodosActions.load({ todos: [] }));
  }
}
