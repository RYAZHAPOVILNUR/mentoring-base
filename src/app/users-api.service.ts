import { HttpClient } from "@angular/common/http";
import { inject, Injectable, OnInit } from "@angular/core";
import { User } from "./users.interface";

@Injectable ({providedIn: 'root'})

export class UserApiService implements OnInit {
	readonly apiService = inject(HttpClient);
	
	getUsers() {
		return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
	}
	
	ngOnInit(): void {
		
	}
}