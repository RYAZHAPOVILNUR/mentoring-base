import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosActions } from './todos.action';
import { SnackbarService } from '../../../../services/snackbar.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodosApiService } from '../../../../services/api-services/todos-api.service';
import { Todo } from '../../../../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly snackbarService: SnackbarService = inject(SnackbarService);
  private readonly todosApiService: TodosApiService = inject(TodosApiService);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.load),
      mergeMap(() => {
        const localStorageTodos = localStorage.getItem('todos');

        if (localStorageTodos) {
          const todos = JSON.parse(localStorageTodos);
          return of(TodosActions.set({ todos }));
        } else {
          return this.todosApiService.getTodos().pipe(
            map((todos) => {
              localStorage.setItem('todos', JSON.stringify(todos));
              return TodosActions.set({ todos });
            }),
            catchError(() => {
              return of({ type: '[Todos] Load Error' });
            })
          );
        }
      })
    )
  );

  showSuccessMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosActions.create, TodosActions.delete),
        tap((action) => {
          let message = '';
          if (action.type === TodosActions.create.type) {
            message = 'Задача успешно создана';
          } else if (action.type === TodosActions.delete.type) {
            message = 'Задача успешно удалена';
          }
          this.snackbarService.showMessage(message);
        })
      ),
    { dispatch: false }
  );

  saveTodosToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosActions.create, TodosActions.delete),
        tap((action) => {
          const currentTodos = JSON.parse(
            localStorage.getItem('todos') || '[]'
          );

          if (action.type === TodosActions.create.type) {
            const updatedTodos = [...currentTodos, action.todo];
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
          } else if (action.type === TodosActions.delete.type) {
            const updatedTodos = currentTodos.filter(
              (todo: Todo) => todo.id !== action.id
            );
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
          }
        })
      ),
    { dispatch: false }
  );
}
