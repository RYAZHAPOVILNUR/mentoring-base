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

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


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
        // this.todosApiService.getTodos().subscribe(
        //     (response: any) => {
        //         // console.log(response)
        //         this.store.dispatch(TodosActions.set({ todos: response }))
        //     }
        // )

        // console.log(this.cashedData, 'локальные данные')

        this.todos$.subscribe(
            todos => console.log(todos)
        )

        if (this.cashedData) {

            console.log('данные есть в локал')
            this.store.dispatch(TodosActions.set({todos: JSON.parse(this.cashedData)}))
            return

        } else {

            console.log('Данных нет в локал')
            this.todosApiService.getTodos().subscribe(
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
            const todoId = todos.findIndex((user: Todo) => user.id === id)
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
        const todoId = todos.findIndex((todoLS: Todo) => todoLS.id === todo.id);
            if (todoId !== -1) {
                
                todos[todoId] = newTodo;
                localStorage.setItem('todos', JSON.stringify(todos));
                console.log(`Задача отредактирован`);
           } else {
               console.log(`Задача с id ${todo.id} не найден в local storage`);
            }
    };

    public updateLocalStorage(todo: Todo[]): void {
        localStorage.setItem('todos', JSON.stringify(todo));
      }

    

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
            data: 1234312423,
        });
            
        dialogRef.afterClosed().subscribe(createResult => {
            console.log('МОДАЛКА ЗАКРЫТА', createResult);
                if (!createResult) return;
                this.createTodo(createResult)
        });
    }

    
    
}