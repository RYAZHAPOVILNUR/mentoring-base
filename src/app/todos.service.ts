import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Todo } from "./todo-list/todo-interface";

@Injectable({providedIn: 'root'})
export class TodosService {
    todosSubject = new BehaviorSubject<Todo[]>([]); 
    todos$: Observable<Todo[]> = this.todosSubject.asObservable(); 
    
    setTodos(todos: Todo[]) {
        this.todosSubject.next(todos); 
    }

    editTodos(editedTodo: Todo) {
        this.todosSubject.next(
            this.todosSubject.value.map(
                todo => todo.id === editedTodo.id ? editedTodo : todo
            )
        )
    }

    createTodos(todo: Todo) {
        const exisingTodo = this.todosSubject.value.find(
            (currentElement) => currentElement.userId === todo.userId
        ); 
        if (exisingTodo) {
            alert("Такая задача есть"); 
        } else {
            this.todosSubject.next(
                [...this.todosSubject.value, todo]
            ); 
            alert("Новая задача успешно добавлена")
        }
    }

    deleteTodo(id: number) {
        this.todosSubject.next(
            this.todosSubject.value.filter(
                item => id === item.id ? false : true
            )
        )
    }
}