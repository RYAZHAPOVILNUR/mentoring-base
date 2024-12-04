import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosApiService } from '../../todos-api.service';
import { TodosActions } from './todos.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Todo } from '../../interfaces/todo-interface';

export const loadTodos = createEffect(
  (actions$ = inject(Actions), todosService = inject(TodosApiService)) => {
    return actions$.pipe(
      ofType(TodosActions.load),
      switchMap(() =>
        todosService.getTodos().pipe(
          map((todos) =>
            TodosActions.loadedSuccess({ todos: todos.slice(0, 10) })
          ),
          catchError((error) => of(TodosActions.loadedError({ error })))
        )
      )
    );
  },
  { functional: true }
);
