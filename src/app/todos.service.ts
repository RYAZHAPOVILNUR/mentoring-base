import { Injectable } from "@angular/core";
import { Todo } from "./todos-list/todos-list.interface";
import { BehaviorSubject } from "rxjs";
import { User } from "./users-list/users-list.interface";
import { UsersApiService } from "./users-api.service";


@Injectable ({providedIn: 'root'})
export class TodosService {
    private users: User[] = [];
    private todosSubject$ = new BehaviorSubject<Todo[]>([])
    todos$ = this.todosSubject$.asObservable();
    
    setTodos(todos: Todo[]) {
        this.todosSubject$.next(todos);
    }

    editTodos(editTodos: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todos => todos.id === editTodos.id ? editTodos: todos));
    }

    constructor(private usersApiService: UsersApiService) {
        this.loadUsers()
    } 

    private loadUsers() {
        this.usersApiService.getUsers().subscribe((users) => {this.users= users;});
        console.log('Load users: ', this.users)
    }
    createTodos(todo: Todo): void { // Загружаем список пользователей 
        const userExists = this.users.some((user) => user.id === todo.userId);
        console.log('User exists:', userExists)
            if (userExists) { // Добавляем задачу, если пользователь найден 
                const currentTodos = this.todosSubject$.value; // Получаем текущий список задач
                this.todosSubject$.next([...currentTodos, todo]); // Добавляем новую задачу 
                alert("Задача успешно создана!"); 
            } else {// Показываем ошибку, если пользователь не найден 
                alert(`Ошибка: пользователь с id ${todo.userId} не найден.`); 
            } 
    }

    

    deletedTodos(id: number) {
        this.todosSubject$.next (
            this.todosSubject$.value.filter(
                item => item.id !== id ));
    }


}
