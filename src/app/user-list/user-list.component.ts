import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { User, UserService } from '../user-service.service';
import { Observable } from 'rxjs';
import { Homework9Component } from "../homeworks/homework-9/homework-9.component";



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, Homework9Component],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',

})

export class UserListComponent {




    users: User[] = [];
    parse$: Observable<boolean> = this.userService.parse$;
    isNotEmailGroup$: Observable<boolean> = this.userService.isNotEmailGroup$;
    numberNine$: Observable<boolean> = this.userService.isNotEmailGroup$;
    isAllUser: boolean = false;
    showCity: boolean = false;
    isPurseLowerCase: boolean = false;
    test: boolean = false;

    isShowLength$: Observable<boolean> = this.userService.isShowLength$;

    constructor(private userService: UserService) {
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
    }

    deleteUser(id: number, users: User[]) {
      this.users = this.userService.deleteUser(id, users);
    }

    getNineUser(n: number, users: User[]) {
      this.userService.isShowLengthSubject.next(true);
      this.isAllUser = !this.isAllUser;
      this.userService.getNineUser(n, users, this.isAllUser).subscribe(updatedUsers => {
        this.users = updatedUsers;
        console.log(this.users);
        console.log(this.isAllUser);
      });
    }
    
    getUsersCity(city: string, users: User[]) {
      this.userService.isShowLengthSubject.next(true);
      this.isAllUser = false;
      this.showCity = !this.showCity;
      this.userService.getUsersCity(city, users, this.showCity).subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
    }

    getFiveUsers(n: number, users: User[]) {
      this.userService.isShowLengthSubject.next(true);
      this.isAllUser = !this.isAllUser;
      this.userService.getFiveUsers(n, users, this.isAllUser).subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
    }

    getReversUsers(users: User[]) {
      this.isAllUser = false;
      this.isAllUser = !this.isAllUser;
      this.userService.isShowLengthSubject.next(true);
      this.userService.getReversUsers(users, this.isAllUser).subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
    }

    getLengthUsers() {
      this.isAllUser = false;
      this.userService.isShowLengthSubject.next(!this.userService.isShowLengthSubject.value);
    }

    purseLowerUsername(users: User[]) {
      this.userService.isShowLengthSubject.next(true);
      this.isAllUser = !this.isAllUser;
      this.userService.purseLowerUsername(users, this.isAllUser).subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
    }

    getComUsers(domen: string, users: User[]) {
      this.userService.isShowLengthSubject.next(true);
      this.isAllUser = !this.isAllUser;
      this.userService.getComUsers(domen, users, this.isAllUser).subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
    }

    getLengthUsername(length: number, users: User[]) {
      this.userService.isShowLengthSubject.next(true);
      this.isAllUser = !this.isAllUser;
      this.userService.getLengthUsername(length, users, this.isAllUser).subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
    }
}
