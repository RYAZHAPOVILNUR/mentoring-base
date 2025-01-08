import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable ({providedIn: 'root'})
export class UserApiService {
	readonly apiService = inject(HttpClient);
	
	getUsers() {
		return this.apiService.get('https://jsonplaceholder.typicode.com/users')
	}
}