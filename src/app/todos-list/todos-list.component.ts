import { NgFor, AsyncPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "../header/header.component";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";


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
    imports: [NgFor, TodoCardComponent, Header, AsyncPipe],
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
    
}