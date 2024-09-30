import { NgFor, AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";

// const consoleResponse = (response: unknown) => console.log(response)

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
            lng: string
          }
        },
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
    standalone: true,
    imports: [ NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush //не мутируем массивы, cоздаем новые ячейки в памяти
})

export class UsersListComponent {
    // readonly apiService = inject(HttpClient);// не нужен, перенесли в отдельный апи сервис
    readonly userApiService = inject(UserApiService)
    readonly usersService = inject(UsersService)
    // users = this.usersService.users;

    constructor() {
        this.userApiService.getUsers().subscribe(
        (response: any) => {
            this.usersService.setUsers(response);
            // this.users = this.usersService.users;
            }
    )
    // this.usersService.usersSubject.subscribe(
    //     users => this.users = users
    // )
    this.usersService.users$.subscribe(
        users => console.log(users)
    )

    }

    deleteUser(id: number) {
        this.usersService.deleteUser(id);
        // this.users = this.usersService.users;
    }

    public createUser(formData: any) {
        this.usersService.createUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.companyName,
            },
        });
        console.log('from FORM: ', event)
    }
    
}

// Ильнур. ЗАДАЧИ ПО JS
// 1. Преобразовать данные из https://jsonplaceholder.typicode.com/users к виду 
//чтобы у каждого пользователя отобразить только id и username
// for (let item in this.users){
//     console.log('id: ' + this.users[item].id + ', username: ' + this.users[item].username)
// }
// 2. Получить из данных выше список всех эмейлов
// 3. Вывести пользователя с id === 9
// 4. Вывести всех пользователей из города 'Lebsackbury'
// 5. Вывести первых 5 пользователей
// 6. Вывести всех пользователей в обратном порядке
// 7. Посчитать сколько всего пользователей
// 8. Вывести список вебсайтов пользователей которые содержат '.com'
// 9. Вывести все username которые длиннее 12 символов
// 10. Привести список всех username где каждый будет в нижнем регистре
// console.log('1 task - у каждого пользователя отобразить только id и username');
// for (let item in this.users){
//     console.log('id: ' + this.users[item].id + ', username: ' + this.users[item].username)
// }
// console.log('2 task - Получить из данных выше список всех эмейлов');
// for (let item in this.users){
//     console.log('id: ' + this.users[item].id + ', email: ' + this.users[item].email)
// }
// console.log('3 task - Вывести пользователя с id === 9');
// for (let i=0; i < this.users.length; i++){
//     if (this.users[i].id === 9) {
//     console.log('id === 9 ', this.users[i])
//     }
// }
// console.log('4 task - Вывести всех пользователей из города "Lebsackbury"');
// for (let item in this.users){
//     if (this.users[item].address.city === 'Lebsackbury') {
//     console.log('Lebsackbury ', this.users[item])
//     }
// }
// console.log('5 task - Вывести первых 5 пользователей');
// for (let i = 0; i < 5; i++){
//     console.log(this.users[i])
// }
// console.log('6 task - Вывести всех пользователей в обратном порядке');
// for (let i = this.users.length -1; i >= 0; i--){
//     console.log(this.users[i])
// }
// console.log('7 task - Посчитать сколько всего пользователей');
//     console.log('всего пользователей: ', this.users.length);
// console.log('8 task - Вывести список вебсайтов пользователей которые содержат ".com"');
// for (let item in this.users){
//     if (this.users[item].website.slice(-4) === '.com') {
//     console.log(this.users[item].website)
//     }
// }
// console.log('9 task - Вывести все username которые длиннее 12 символов');
// for (let item in this.users){
//     if (this.users[item].username.length > 12) {
//     console.log(this.users[item].username)
//     }
// }
// console.log('10 task - Привести список всех username где каждый будет в нижнем регистре');
// for (let item in this.users){
//     console.log(this.users[item].username.toLowerCase())
//     }




