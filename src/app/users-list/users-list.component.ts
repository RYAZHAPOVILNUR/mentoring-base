import { AsyncPipe, formatDate, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { ICreateUser } from '../interfaces/user-itesrfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, NgIf, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.OnPush для реактивных данных RXJS
  // с этой функцией OnPush работа кода и сайта с данными идет намного быстрее
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService); // передали из файла users.service.ts

  constructor() {
    // подписка => получение данных методом getUsers из файла users-api.service.
    this.usersApiService.getUsers().subscribe((response: any) => {
      // подписка => установка и загрузка данных методом setUsers из файла users.service.ts
      this.usersService.setUsers(response);
    });

    this.usersService.users$.subscribe((users) => console.log(users));
  }

  deleteUser(id: number) {
    // удаления данных используя метод deleteUser из файла users.service.ts
    this.usersService.deleteUser(id);
  }

  public createUser(formDate: ICreateUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formDate.name,
      email: formDate.email,
      website: formDate.website,
      company: {
        name: formDate.companyName,
      },
    });
    console.log('ДАННЫЕ ФОРМЫ: ', event);
  }
}
