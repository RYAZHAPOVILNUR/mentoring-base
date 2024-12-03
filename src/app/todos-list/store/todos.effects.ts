import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {TodosActions} from "./todos.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {TodosApiService} from "../../services/todo-services/todos-api.service";
import {TodoInterface} from "../../interfaces/todo-interfaces";

export const loadTodos = createEffect(
    (actions$: Actions = inject(Actions), todosService: TodosApiService = inject(TodosApiService)) => {
        return actions$.pipe(
            ofType(TodosActions.load),
            switchMap(() =>
                todosService.getTodos().pipe(
                    map((todos: TodoInterface[]) => TodosActions.loadSuccess({todos})),
                    catchError((error: any) => of(TodosActions.loadError({error})))
                )
            )
        );
    },
    {functional: true}
)

