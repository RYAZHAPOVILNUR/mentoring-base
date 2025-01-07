import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	adress: {
		street: string;
		suite: string;
		city: string;
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

@Component ({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrl: './users-list.component.scss',
	standalone: true,
	imports: [NgFor],
})

export class UsersListComponent {
	readonly apiService = inject(HttpClient);
	users: User[] = [];
	
	constructor() {
		this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
			(response: User[]) => {
				this.users = response;
			}
		)
		
	}
	
	deleteUser(id: number) {
		this.users = this.users.filter(
			item => item.id !== id
		)
	}
}
