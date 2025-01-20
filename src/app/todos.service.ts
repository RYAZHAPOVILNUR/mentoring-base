import { Injectable } from "@angular/core";
import { Todo } from "./interfaces/todos.interface";

@Injectable({providedIn: 'root'})

export class TodosService {
    todos: Todo[] = [];
}