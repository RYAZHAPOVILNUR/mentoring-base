import { Injectable } from "@angular/core";
import { Todo } from "./todos-list.component/todo-interface";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class TodosService {
    todosSubject = new BehaviorSubject<Todo[]>([])

    setTodos(todos: Todo[]) {
        this.todosSubject.next(todos)
    }

    editTodos(editedTodo: Todo){
        this.todosSubject.next(
            this.todosSubject.value.map(
                el => {
                    if(el.id === editedTodo.id) {
                        return editedTodo
                    }else {
                        return el
                    }
                }
            )
        )
    }

    createTodos(todo: Todo){
        this.todosSubject.next(
            [...this.todosSubject.value, todo]
        )
    }

    deleteTodo(id: number) {
            this.todosSubject.next(
                this.todosSubject.value.filter(
                    el => {
                        if(id === el.id){
                            return false
                        }else {
                            return true
                        }
                    }
                )
            )
        }

}