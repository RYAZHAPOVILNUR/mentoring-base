import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "../header/header.component";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";


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
    imports: [NgFor, TodoCardComponent, Header],
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService)
    todos: Todo[] = [];

    constructor() {
        this.todosApiService.getTodos().subscribe(
        (response: any) => {
            this.todos = response;
            }
    )
    }
    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            todo => todo.id !== id
        )
    }
    
}