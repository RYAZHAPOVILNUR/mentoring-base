import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todos-list.component";

@Injectable({providedIn: "root"})
export class TodosService {
    todosSubject$ = new BehaviorSubject<Todo[]>([]);
    
    setTodos(todo: Todo[]) {
        this.todosSubject$.next(todo);
    }

    editTodos(editedTodo: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todos => {
                    if (todos.id === editedTodo.id) {
                        return editedTodo
                    } else {
                        return todos
                    }
                }
            )
        )
    }
    
    createTodos(todo: Todo) {
        this.todosSubject$.next(
            [...this.todosSubject$.value, todo]
        )
    }

    deleteTodos(id: number) {
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                todo => {
                    if (id === todo.id) {
                        return false
                    } else {
                        return true
                    }
                }
            )
        )
    }
}