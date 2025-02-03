import { Injectable } from "@angular/core";
import { Todos } from "./todos";
import { BehaviorSubject } from "rxjs";


@Injectable({ providedIn: 'root' })

export class TodosService {
    todosSubject$ = new BehaviorSubject<Todos[]>([]);
    todos$ = this.todosSubject$.asObservable();

    setTodo(todos: Todos[]) {
        this.todosSubject$.next(todos);
    }

    editTodo(editdTodo: Todos) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(todo =>
                editdTodo.id === todo.id ? editdTodo : todo
            )
        )
    }

    createTodo(todo: Todos) {
       const existingTodo = this.todosSubject$.value.find(
        item => item.userId === todo.userId
       )

       if(existingTodo) {
        alert('ТАКОЙ USER ID УЖЕ ЗАРЕГИСТРИРОВАН!');
       }
       else {
        this.todosSubject$.next(
            [...this.todosSubject$.value, todo]
        );
        alert('НОВАЯ ЗАДАЧА ЗАРЕГИСТРИРОВАНА!');
       }
    }

    deleteTodo(id: number) {
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                item => id !== item.id
            )
        )
    }

}