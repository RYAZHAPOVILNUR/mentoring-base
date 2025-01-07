import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface User {
	address?: {
		geo: {
			lat: string;
			lng: string;
		};
	};
	name: string;
	email: string;
	phone?: string;
	website: string;
	id: number;
	company: {
		name: string;
		catchPhrase?: string;
		bs?: string;
	};
}

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  readonly apiService = inject(HttpClient);

  getUsers() {
    return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
