import { Injectable } from "@angular/core";
import { Todo } from "./components/todos/todos.component";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TodosService {
    private todosSubject$ = new BehaviorSubject<Todo[]>([]);
    todos$ = this.todosSubject$.asObservable();

    setTodos(todos: Todo[]) {
        this.todosSubject$.next(todos.slice(0, 8))
    }

    editTodo(editedTodo: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => {
                    if (todo.id === editedTodo.id) {
                        return editedTodo
                    } else {
                        return todo
                    }
                }
            )
        )
    }

    createTodo(todo: Todo) {
        const todoIsExisting = this.todosSubject$.value.find(
            (currentElement) => currentElement.title === todo.title 
        );
         
        if (todoIsExisting !== undefined) {
            alert('ТАКАЯ ЗАДАЧА УЖЕ СУЩЕСТВУЕТ');
        } else {
            this.todosSubject$.next([...this.todosSubject$.value, todo]);
            alert('НОВАЯ ЗАДАЧА УСПЕШНО ДОБАВЛЕНА');
        }
       
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