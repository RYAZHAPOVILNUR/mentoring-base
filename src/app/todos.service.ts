import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TodoInterface } from "./interfaces/todo-interfaces";

@Injectable({ providedIn: 'root' })
export class TodosService {
    // доступ только в этом файле
    private todosSubject$ = new BehaviorSubject<TodoInterface[]>([]);

    // переменную todos$ можно использовать вне файла
    public readonly todos$ = this.todosSubject$.asObservable();

    //* установка todos
    setTodos(todos: TodoInterface[]) {
        this.todosSubject$.next(todos.slice(0, 15));
    }

    //* изменение todos
    editTodo(editedTodo: TodoInterface) {
        // next перезаписывает данные по новому и возвращает обновленный массив после завершения функции map
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => {
                    if (todo.id === editedTodo.id) {
                        return editedTodo;
                    } else {
                        return todo;
                    }
                }
            )
        );
    }

    //* создание todo
    createTodo(todo: TodoInterface) {
        const existingTask = this.todosSubject$.value.find(
            (currentElement) => currentElement.title === todo.title
        );

        if (existingTask !== undefined) {
            alert('Такое задание уже существует!');
        } else {
            this.todosSubject$.next([...this.todosSubject$.value, todo]);
            alert('Новая задача успешно добавлена!');
        }
    }

    //* удаление todo
    deleteTodo(id: number) {
        // next перезаписывает данные по новому и возвращает обновленный массив
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                // метод filter проверяет если id не равны оставляет, иначе исключает
                item => item.id !== id
            )
        );
    }
}