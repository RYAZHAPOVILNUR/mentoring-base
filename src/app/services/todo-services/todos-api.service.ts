import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TodoInterface} from "../../interfaces/todo-interfaces";

@Injectable({providedIn: 'root'})
export class TodosApiService {

    private readonly apiService: HttpClient = inject(HttpClient);

    private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

    getTodos(): Observable<TodoInterface[]> {
        return this.apiService.get<TodoInterface[]>(`${this.baseUrl}/todos`);
    }
}
