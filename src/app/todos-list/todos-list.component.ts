import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { ITodo } from '../interfaces/todo.interface';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { MatCardModule } from '@angular/material/card';
import { ShadowDirective } from '../directives/shadow.directive';
import { Store } from '@ngrx/store';
import { TodoActions } from './store/todo.actions';
import { selectTodos } from './store/todo.selectors';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    TodosCardComponent,
    AsyncPipe,
    CreateTodoComponent,
    MatCardModule,
    ShadowDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);

  constructor() {
    this.todosApiService.getTodosList().subscribe((response) => {
      this.store.dispatch(TodoActions.set({ todos: response }));
    });
  }

  createTodo(formData: ITodo) {
    this.store.dispatch(
      TodoActions.create({
        todo: {
          id: new Date().getTime(),
          userId: formData.userId,
          title: formData.title,
          completed: formData.completed,
        },
      })
    );
  }

  deleteTodo(id: number) {
    this.store.dispatch(TodoActions.delete({ id }));
  }

  editTodo(todo: ITodo) {
    this.store.dispatch(TodoActions.edit({ todo }));
  }
}
