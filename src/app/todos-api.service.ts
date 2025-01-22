import { HttpClient } from "@angular/common/http";
import { inject, Injectable, OnInit } from "@angular/core";
import { Todo } from "./todos.interface";

@Injectable ({providedIn: 'root'})

export class TodosApiService implements OnInit {
	readonly apiService = inject(HttpClient);
	
	getTodos() {
		return this.apiService.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
	}
	
	ngOnInit(): void {
		
	}
}