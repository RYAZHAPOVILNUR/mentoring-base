import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITodo } from "./Interfaces/todo.interface";

@Injectable({providedIn: 'root'})
export class TodosApiService {
    readonly apiService = inject(HttpClient);
    
    getTodos(): Observable<ITodo[]> {
        return this.apiService.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
    }
}