import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./users.interface";

@Injectable({providedIn: 'root'})

export class UsersService implements OnInit {
	usersSubject = new BehaviorSubject<User[]>([]);
	
	setUsers(users: User[]) {
		this.usersSubject.next(users);
	}
	
	editUser(editedUser: User) {
		this.usersSubject.value.map(
			user => {
				if (user.id === editedUser.id) {
					return editedUser
				} else {
					return user
				}
			}
		)
	}
	
	createUser(user: User) {
		const existingUser = this.usersSubject.value.find(
			currentElement => currentElement.email === user.email
		);
		if (existingUser !== undefined) {
			alert('Пользователь с таким Email уже зарегистрирован');
		} else {
			this.usersSubject.next([user, ...this.usersSubject.value])
			alert('Новый пользователь зарегистрирован');
		}
	}
	
	deleteUser(id: number): void {
		this.usersSubject.next(
			this.usersSubject.value.filter(
				item => {
					if (id === item.id) {
						return false
					} else {
						return true;
					}
				}
			)
		)
		
	}
	
	ngOnInit(): void {
		
	}
}

