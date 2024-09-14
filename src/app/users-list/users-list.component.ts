import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "../header/header.component";

// const consoleResponse = (response: unknown) => console.log(response)

export interface User {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
          street: string;
          suite: string;
          city: string;
          zipcode: string;
          geo: {
            lat: string;
            lng: string
          }
        },
        phone: string;
        website: string;
        company: {
          name: string;
          catchPhrase: string;
          bs: string;
        };
      }

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [RouterOutlet, NgFor, RouterLink, Header],
})

export class UsersListComponent {
    readonly apiService = inject(HttpClient);
    users: User[] = [];

    constructor() {
        this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
        (response: any) => {
            this.users = response;
            console.log('users: ', this.users)
        }
    )
    }
    deleteUser(id: number) {
        this.users = this.users.filter(
            item => item.id !== id
        )
    }
    
}

