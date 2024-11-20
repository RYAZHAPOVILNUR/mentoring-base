import { Injectable } from "@angular/core";
import { Todo } from "./todos-list/todos-list.interface";
import { BehaviorSubject } from "rxjs";

@Injectable ({providedIn: 'root'})
export class TodosService {
    private todosSubject$ = new BehaviorSubject<Todo[]>([])
    todos$ = this.todosSubject$.asObservable();
    
    setTodos(todos: Todo[]) {
        this.todosSubject$.next(todos);
    }

    editTodos(editTodos: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todos => todos.id === editTodos.id ? editTodos: todos));
    }

    createTodos(todo: Todo) {
        this.todosSubject$.next(
            [...this.todosSubject$.value, todo]
        );
    }

    deletedTodos(id: number) {
        this.todosSubject$.next (
            this.todosSubject$.value.filter(
                item => item.id !== id ));
    }


}
