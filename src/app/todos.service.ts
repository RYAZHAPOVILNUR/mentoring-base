import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todos-list.component";




@Injectable({providedIn: 'root'})
export class TodosService {
    todosSubject = new BehaviorSubject<Todo[]>([])

    setTodos(todos: Todo[]) {
        this.todosSubject.next(todos)
    }

    editTodos(editedTodo: Todo) {
        this.todosSubject.next(
            this.todosSubject.value.map(
                todo => {
                    if (todo.id == editedTodo.id) {
                        return editedTodo
                    } else {
                        return todo
                    }
                }
            )
        )
    }

    createTodos(todo: Todo) {
        const todoIsExited = this.todosSubject.value.find(
            CurrentElement => CurrentElement.title === todo.title
        );

        if (todoIsExited !== undefined) {

            alert('Такая задача уже существует')

        } else {

            this.todosSubject.next(
                [...this.todosSubject.value, todo]
            );

            alert('Задача создана')
            
        };
    };

    deleteTodos(id: number) {
        this.todosSubject.next(
            this.todosSubject.value.filter(
                item => {
                    if (id === item.id) {
                        return false 
                    } else {
                        return true
                    }
                }
            )
        )
    }



}