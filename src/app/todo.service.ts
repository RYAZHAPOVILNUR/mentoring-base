import { Injectable } from "@angular/core";
import { Todo } from "./todos-list/todos-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class TodosService {
   private todosSubject$ = new BehaviorSubject<Todo[]>([]);
   public todos$ = this.todosSubject$.asObservable();

   setTodo(todos: Todo[]) {
    this.todosSubject$.next(todos.slice(0, 10));
   }

   editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
        this.todosSubject$.value.map(
        todo => {
            if (todo.id === editedTodo.id ) {
                return editedTodo
            } else{
                return todo
            }
        }
        )
    )
   }

   creatTodo(todo: Todo) {
    this.todosSubject$.next(
        [...this.todosSubject$.value, todo]
    )
   }
   deleteTodo(id: number) {
    this.todosSubject$.next(
        this.todosSubject$.value.filter(
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