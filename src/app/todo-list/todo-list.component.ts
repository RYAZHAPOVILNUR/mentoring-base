import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todo-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoFormComponent } from '../create-todo-form/todo-form.component';
import { Todo } from '../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { selectTodos } from '../users-list/store/todos.selectors';
import { TodosActions } from '../users-list/store/todo.actions';

@Component({
  selector: 'todo-list-root',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, TodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService);
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos)

  constructor() {
    this.todosApiService.getTodos().subscribe((res: Todo[]) => {
      this.store.dispatch(TodosActions.set({ todos: res }));
    });
  }

  deleteTodo(id: number) {
    this.store.dispatch(TodosActions.delete({ id }));
  }

  createTodo(formData: Todo) {
    this.store.dispatch(TodosActions.create({ todo: {
        userId: formData.userId,
        id: formData.id,
        title: formData.title,
        completed: formData.completed,
    } }));
  }
}

export { Todo };
