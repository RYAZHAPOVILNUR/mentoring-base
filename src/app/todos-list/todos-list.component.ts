import { NgFor, AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Injectable, Input, Output } from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "../header/header.component";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";
import { CreateTodoDialogComponent } from "./create-todo-dialog/create-todo-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { TodosActions } from "./store/todos.actions";
import { selectTodos } from "./store/todos.selector";


export interface Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush //не мутируем массивы, cоздаем новые ячейки в памяти
})

export class TodosListComponent {

    @Output()
    createModalTodo = new EventEmitter ();

    readonly todosApiService = inject(TodosApiService)
    readonly todosService = inject(TodosService)
    readonly dialog = inject(MatDialog);
    readonly snackbar = inject(MatSnackBar);
    private readonly store = inject(Store);
    public readonly todos$ = this.store.select(selectTodos);
    // todos: Todo[] = []

    constructor() {
        this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
            this.store.dispatch(TodosActions.set({ todos: response }));
            });
    }
    deleteTodo(id: number) {
        this.todosService.deleteTodo(id);
        this.store.dispatch(TodosActions.delete({ id }));
    }

    public createTodo(formData: Todo) {
        this.store.dispatch(
            TodosActions.create({
                todo: {
                    id: new Date().getTime(),
                    title: formData.title,
                    userId: formData.userId,
                    completed: formData.completed,        
                }
            })
        )
    }

    openCreateDialog(): void {
        const dialogRef = this.dialog.open(CreateTodoDialogComponent);

        dialogRef.afterClosed().subscribe((createResult) => {
          console.log('MODAL CLOSED', createResult);
            if(createResult){
                this.createTodo(createResult);
                console.log(createResult);
                this.snackbar.open('TODO created', 'OK', {duration: 3000})
            }
            else {
                this.snackbar.open('CREATE canseled', '', {duration: 3000})
              }    
        });
      }    
}