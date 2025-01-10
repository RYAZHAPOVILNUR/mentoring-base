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
    
    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                console.log(response)
                this.store.dispatch(TodosActions.set({ todos: response }))
            }
        )

        this.todos$.subscribe(
            todos => console.log(todos)
        )

    };


    public deleteTodo(id: number) {
        this.store.dispatch(TodosActions.delete({ id }));
    };


    public createTodo(formData: any) {
        this.store.dispatch(TodosActions.create({ 
            todo: {
                id: new Date().getTime(),
                userId: formData.userId,
                title: formData.title,
                completed: formData.completed
            }
         }))
    };

    public editTodo(todo: any) {
        this.store.dispatch(TodosActions.edit({ 
            todo: {
                id: todo.id,
                userId: todo.userId,
                title: todo.title,
                completed: todo.completed
            }
         }))
    };
    

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