import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "./users.interface";

@Injectable ({providedIn: 'root'})

export class UserApiService {
	readonly apiService = inject(HttpClient);
	
	getUsers() {
		return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
	}
}