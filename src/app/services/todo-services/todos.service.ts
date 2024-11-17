import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {TodoInterface} from "../../interfaces/todo-interfaces";

@Injectable({providedIn: 'root'})
export class TodosService {
    private todosSubject$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
    public readonly todos$: Observable<TodoInterface[]> = this.todosSubject$.asObservable();

    //* установка todos
    setTodos(todos: TodoInterface[]): void {
        this.todosSubject$.next(todos.slice(0, 15));
    }

    public getTodo(): TodoInterface[] {
        return this.todosSubject$.value;
    }

    //* изменение todos
    editTodo(editedTodo: TodoInterface): void {
        this.todosSubject$.next(
            this.todosSubject$.value.map( // next перезаписывает данные по новому и возвращает обновленный массив после завершения функции map
                (todo: TodoInterface) => {
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
    createTodo(todo: TodoInterface): void {
        const existingTask: TodoInterface | undefined = this.todosSubject$.value.find(
            (currentElement: TodoInterface) => currentElement.title === todo.title
        );

        if (existingTask !== undefined) {
            alert('Такое задание уже существует!');
        } else {
            this.todosSubject$.next([...this.todosSubject$.value, todo]);
            alert('Новая задача успешно добавлена!');
        }
    }

    //* удаление todo
    deleteTodo(id: number): void {
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                (item: TodoInterface) => item.id !== id // метод filter проверяет если id не равны оставляет, иначе исключает.
            )
        );
    }
}