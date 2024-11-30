import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ITodo } from "../interfaces/todo.interface";

@Injectable({ providedIn: 'root' })
export class TodosService {
    constructor(private snackBar: MatSnackBar) { }

    private todosSubject$ = new BehaviorSubject<ITodo[]>([])
    todos$ = this.todosSubject$.asObservable()

    setTodos(todos: ITodo[]) {
        this.todosSubject$.next(todos)
    }

    editTodos(editedTodo: ITodo) {
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

    createTodos(todo: ITodo) {
        const todoIsExisting = this.todosSubject$.value.find(
            (currentElement) => currentElement.title === todo.title
        )

        if (todoIsExisting !== undefined) {
            this.snackBar.open('Такая задача уже есть', 'Закрыть', {
                duration: 3000,
            })
        } else {
            this.todosSubject$.next([...this.todosSubject$.value, todo])
            this.snackBar.open('Задача успешно добавлена', 'Закрыть', {
                duration: 3000,
            })
        }
    }

    deleteTodos(id: number) {
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