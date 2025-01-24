import { Injectable } from "@angular/core";
import { Todo } from "./todo-card/todos-interface";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodosService {
    todosSubject$ = new BehaviorSubject<Todo[]>([]);
    todos$ = this.todosSubject$.asObservable();

    setTodos(todos: Todo[]) {
        this.todosSubject$.next(todos);
    }

    editedTodo(editedTodo: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => todo.id === editedTodo.id ? editedTodo : todo
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
