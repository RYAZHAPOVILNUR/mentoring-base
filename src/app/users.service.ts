import { Injectable } from '@angular/core';
import { User } from './interfaces/user-interfaces';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UsersService {
  

  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

  constructor(private snackBar: MatSnackBar) {}

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) =>
        user.id === editedUser.id ? editedUser : user
      )
    );
  }

  
  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => item.id !== id)
    );
  }

  createUser(user: User) {
   if (this.existingUser(user.email)) {
     this.snackBar.open('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН', '🍓', {
       duration: 3000,
     });
   } else {
     this.usersSubject$.next([...this.usersSubject$.value, user]);
     this.snackBar.open('Новый пользователь успешно добавлен!', '🍕', {
       duration: 5000,
     });
   }
 }

 existingUser(email: string): boolean {
   return this.usersSubject$.value.some(user => user.email === email);
 }


 
 }
