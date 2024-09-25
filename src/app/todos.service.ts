import { Injectable } from "@angular/core";
import { Todo } from "./todos-list/todos-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: "root"})

export class TodosService {
    private todosSubject$ = new BehaviorSubject<Todo[]>([]); //указываем дженерик тип
    todos$ = this.todosSubject$.asObservable();

    setTodos(todos: Todo[]) {
        this.todosSubject$.next(todos)
    }

    editTodo(editedTodo: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => {
                    if (todo.id === editedTodo.id) {
                        return editedTodo
                    } else {
                        return todo
                    }
                }
            )
        )
    }

    createTodo(todo: Todo) {
        this.todosSubject$.next(
            [...this.todosSubject$.value, todo]
        )
    }

    deleteTodo(id: number) {
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                item => item.id !== id
            )
        )
    }
}
