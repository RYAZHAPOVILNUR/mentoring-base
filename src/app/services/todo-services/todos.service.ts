import {inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {TodoInterface} from "../../interfaces/todo-interfaces";
import {TodosApiService} from "./todos-api.service";
import {LocalStorageService} from "../local-storage.service";

@Injectable({providedIn: 'root'})
export class TodosService {
    private todosSubject$: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
    public readonly todos$: Observable<TodoInterface[]> = this.todosSubject$.asObservable();
    private readonly localStorageService: LocalStorageService = inject(LocalStorageService);
    private readonly todosApiService: TodosApiService = inject(TodosApiService);
    private readonly localStorageTodoKey = 'todos';

    private setTodos(todosData: TodoInterface[]): void {
        this.localStorageService.saveLocalStorage<TodoInterface[]>(
            this.localStorageTodoKey, todosData
        );

        this.todosSubject$.next(todosData);
    }

    public loadTodos() {
        const localStorageTodos: TodoInterface[] | null = this.localStorageService.getLocalStorage<TodoInterface[]>(this.localStorageTodoKey);

        if (localStorageTodos) {
            this.todosSubject$.next(localStorageTodos);
        } else {
            this.todosApiService.getTodos().subscribe((todoData: TodoInterface[]) => {
                this.setTodos(todoData.slice(1, 11));
            });
        }
    }

    public editTodo(todo: TodoInterface): void {
        const index: number = this.todosSubject$.value.findIndex((el: TodoInterface) => el.id === todo.id);

        this.todosSubject$.value[index] = todo;
        this.setTodos(this.todosSubject$.value);
    }

    public createTodo(todo: TodoInterface): void {
        const todoExisting: TodoInterface | undefined = this.todosSubject$.value.find(
            (currentElement: TodoInterface) => currentElement.title === todo.title
        );

        if (todoExisting === undefined) {
            const newTodo: TodoInterface[] = [...this.todosSubject$.value, todo];
            this.setTodos(newTodo);
        } else alert('Такой todo уже есть');
    }

    public deleteTodo(id: number): void {
        const newArrayTodos: TodoInterface[] = this.todosSubject$.value.filter((todo: TodoInterface) => todo.id !== id);
        const findTodo: TodoInterface | undefined = this.todosSubject$.value.find((todo: TodoInterface) => todo.id === id);

        if (findTodo) {
            this.setTodos(newArrayTodos);
        }

        if (!localStorage.getItem(this.localStorageTodoKey)) {
            this.localStorageService.removeLocalStorage(this.localStorageTodoKey);
        }
    }
}