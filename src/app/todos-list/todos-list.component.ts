import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { TodoCardComponent } from "./todos-card/todo-card.component";
import { CreateTodoDialogComponent } from "./create-todo-dialog/create-todo-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Store } from "@ngrx/store";
import { selectTodos } from "./store/todo.selector";
import { TodosActions } from "./store/todo.actions";
import { ITodo } from "../interfaces/todos.interface";
import { take } from "rxjs";



@Component({
    selector: 'todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
            NgFor,
            TodoCardComponent,
            AsyncPipe, 
            MatIcon,
            MatButtonModule,
            NgIf
        ]
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    readonly dialog = inject(MatDialog)
    private readonly store = inject(Store);
    public readonly todos$ = this.store.select(selectTodos);
    readonly cashedData = localStorage.getItem('todos')


    constructor() {

        this.todos$.pipe(take(1)).subscribe(
            todos => console.log(todos)
        )

        if (this.cashedData) {

            console.log('данные есть в локал')
            this.store.dispatch(TodosActions.set({todos: JSON.parse(this.cashedData)}))
            return

        } else {

            console.log('Данных нет в локал')
            this.todosApiService.getTodos().pipe(take(1)).subscribe(
                (response: any) => {
                    this.store.dispatch(TodosActions.set({ todos: response }))
                    localStorage.setItem('todos', JSON.stringify(response))
                })
        }

    };


    public deleteTodo(id: number) {
        this.store.dispatch(TodosActions.delete({ id }));


        const todosLocal = localStorage.getItem('todos');
            const todos = todosLocal ? JSON.parse(todosLocal) : [];
            const todoId = todos.findIndex((user: ITodo) => user.id === id)
            if (todoId !== -1) { 

                todos.splice(todoId, 1);
                localStorage.setItem('todos', JSON.stringify(todos));
                console.log(`Пользователь удален`);
            } else {
              console.log(`Пользователь с id ${id} не найден в local storage`);
            }

    };


    public createTodo(formData: any) {
        const newTodo = {
            id: new Date().getTime(),
            userId: formData.userId,
            title: formData.title,
            completed: formData.completed
        }
        
        this.store.dispatch(TodosActions.create({ todo: newTodo }))
    
        const todosLocal = localStorage.getItem('todos');
        const todos = todosLocal ? JSON.parse(todosLocal) : [];
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    public editTodo(todo: any) {
        const newTodo = {
            id: todo.id,
            userId: todo.userId,
            title: todo.title,
            completed: todo.completed
        }
        
        this.store.dispatch(TodosActions.edit({ todo: newTodo }))
    
        const todosLocal = localStorage.getItem('todos');
        const todos = todosLocal ? JSON.parse(todosLocal) : [];
        const todoId = todos.findIndex((todoLS: ITodo) => todoLS.id === todo.id);
            if (todoId !== -1) {
                
                todos[todoId] = newTodo;
                localStorage.setItem('todos', JSON.stringify(todos));
                console.log(`Задача отредактирован`);
           } else {
               console.log(`Задача с id ${todo.id} не найден в local storage`);
            }
    };


    openDialog(): void {
        const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
            data: 1234312423,
        });
            
        dialogRef.afterClosed().pipe(take(1)).subscribe(createResult => {
            console.log('МОДАЛКА ЗАКРЫТА', createResult);
                if (!createResult) return;
                this.createTodo(createResult)
        });
    }

    
    
}