import { Injectable } from '@angular/core';
import { User } from './users-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	usersSubject$ = new BehaviorSubject<User[]>([]);

	setUsers(users: User[]) {
		this.usersSubject$.next(users);
	};

	editUser(editedUser: User) {
		this.usersSubject$.next(
			this.usersSubject$.value.map(user => {
				if (user.id === editedUser.id) {
					return editedUser;
				}
				return user;
			})
		)
	}

	createUser(user: User) {
		this.usersSubject$.next([...this.usersSubject$.value, user]);
	}

	deleteUser(id: number) {
		this.usersSubject$.next(this.usersSubject$.value.filter(user => user.id !== id));
	}
}
