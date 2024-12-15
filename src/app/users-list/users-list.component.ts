import { AsyncPipe, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, inject, Injectable, Output } from "@angular/core";
import { usersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { ChangeDetectionStrategy } from "@angular/core";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { EditUserDialog } from "./edit-user-dialog/edit-user-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";


export interface User {
    id: number; 
    name: string;
    username?: string;
    email: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
         lat: string;
         lng: string;
        };
    };
    phone?: string;
    website: string;
    company: {
        name: string;
        catchPhrase?: string;
        bs?: string;
    };
}


@Component({
 selector: 'app-users-list',
 templateUrl: './users-list.component.html',
 styleUrl: './users-list.component.scss',
 standalone: true , 
 imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule],
 changeDetection: ChangeDetectionStrategy.OnPush
})


export class UsersListComponent {
readonly UsersApiService = inject(usersApiService)
readonly usersService = inject(UsersService)
users$ = this.usersService.users$
constructor() {
    this.UsersApiService.getUsers().subscribe(
        (Response: User[]) => {
            this.usersService.setUsers(Response);
            this.users$ = this.usersService.users$
        }
    )
    this.usersService.users$.subscribe()
}
      deleteUser(id: number) {
        this.usersService.deleteUser(id)
        this.users$ = this.usersService.users$
      } 
      editUser(user: User) {
      this.usersService.editUser(user)
        }
      
     public createUser(formData: User) {
        this.usersService.createUser({
          id: new Date().getTime(),
          name: formData.name,
          email: formData.email,
          website: formData.website,
          company: {
            name: formData.company.name
          }
        })
      
    }
    readonly dialog = inject(MatDialog)

    CreateUserDialog(): void {
      const dialogRef = this.dialog.open(CreateUserFormComponent, {
          data: { user: this.users$ }
      })
  }
}
