import { Injectable } from "@angular/core";
import { Todo } from "./todos-list/todos-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodosService {
    private todosSubject$ = new BehaviorSubject<Todo[]>([]);
    todos$ = this.todosSubject$.asObservable();

    setTodos(todos: Todo[]) {
        this.todosSubject$.next(todos);
    }

    
    editTodo(editedTodo: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => {
                    return (todo.id === editedTodo.id) ? editedTodo : todo;

                }
            )   
        )
    }


    createTodo(todo: Todo){
        const existingTodo = this.todosSubject$.value.find(
            (currentElement) => currentElement.title === todo.title
        )

        if (existingTodo !== undefined) {
            alert('такой title уже существует')
        } else {
            this.todosSubject$.next(
                [...this.todosSubject$.value, todo]
            )
        }        
    }


    deleteTodo(id: number) {
        this.todosSubject$.next(
            this.todosSubject$.value.filter(todo => {
                return todo.id !== id;
              }
            )
        )
      }
      
}