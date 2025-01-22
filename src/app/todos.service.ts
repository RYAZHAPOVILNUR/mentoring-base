import { Injectable } from "@angular/core";
import { Todo } from "./interfaces/todos.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class TodosService {
    todosSubject$ = new BehaviorSubject<Todo[]>([])
    todos: Todo[] = [];
    todo: (Todo | ((editeTodo: Todo) => void))[] | undefined;

    setTodos(todos: Todo []) {
        // this.todos = todos
        this.todosSubject$.next(todos)
    }


    editeTodo(todo: Todo) {
        // this.todo = this.todos.map(
        //     todo => {
        //         if (todo.id === todo.id) {
        //             return this.editeTodo
        //         } else {
        //             return todo
        //         }
        //     }
        // )

        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => {
                    if (todo.id === todo.id) {
                        return todo
                    } else {
                        return todo
                    }
                }
            )
        )
    }

    creatTodo(todo: Todo) {
        // this.todos = [...this.todos, todo]
        this.todosSubject$.next (
            [...this.todosSubject$.value, todo]
        ) 
    }

    deleteTodo(id: number) {
        // this.todos = this.todos.filter(
        //     item => {
        //         if (id === item.id) {
        //             return false
        //         } else {
        //             return true;
        //         }
        //     }
        // )

        this.todosSubject$.next (
            this.todosSubject$.value.filter(
                // @ts-ignore
                item => {
                    if (id === item.id) {
                        return false   
                    }   
                        else {
                            return true
                        }
                }
            )
        )
    }
}