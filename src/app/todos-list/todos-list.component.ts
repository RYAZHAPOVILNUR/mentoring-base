import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgFor } from "@angular/common";
import { TodoCardComponent } from "./todos-card/todo-card.component";
import { TodosService } from "../todos.service";
import { CreateTodoDialogComponent } from "./create-todo-dialog/create-todo-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

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
            MatButtonModule
        ]
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    readonly todosService = inject(TodosService)
    readonly dialog = inject(MatDialog)

    deleteTodo(id: number) {
        this.todosService.deleteTodos(id)
    };


    public createTodo(formData: any) {
        console.log('ДАННЫЕ ФОРМЫ:', formData);
        this.todosService.createTodos({
            id: new Date().getTime(),
            userId: formData.userId,
            title: formData.title,
            completed: formData.completed
        })
    };

    public editTodo(user: any) {
        this.todosService.editTodos({
            ...user,
            company: {
                name: user.companyName
            }
        })
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

    
    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todosService.setTodos(response)
            }
        )

        this.todosService.todosSubject.subscribe(
            todos => console.log(todos)
        )
    }
}