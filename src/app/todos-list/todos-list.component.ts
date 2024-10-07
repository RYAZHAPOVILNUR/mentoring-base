import { NgFor, AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "../header/header.component";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";


export interface Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

@Component({
    selector: 'app-users-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent, Header, AsyncPipe, CreateTodoFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush //не мутируем массивы, cоздаем новые ячейки в памяти
})

export class TodosListComponent {
    readonly todoApiService = inject(TodosApiService)
    readonly todosService = inject(TodosService)

    constructor() {
        this.todoApiService.getTodos().subscribe(
        (response: any) => {
            this.todosService.setTodos(response);
            }
    )
    }
    deleteTodo(id: number) {
        this.todosService.deleteTodo(id);
    }

    public createTodo(formData: Todo) {
        this.todosService.createTodo({
            id: new Date().getTime(),
            title: formData.title,
            userId: formData.userId,
            completed: formData.completed,
        });
        console.log('from FORM: ', event)
    }

    
}