import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../../users.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonCreateUserFormComponent } from './button-create-user-form/button-create-user-form.component';

export interface User {
  id:       number;
  name:     string;
  username?: string;
  email:    string;
  address?: {
      street:  string;
      suite:   string;
      city:    string;
      zipcode: string;
      geo: {
          lat: string;
          lng: string;
      };
  };
  phone?:   string;
  website: string;
  company: {
      name:        string;
      catchPhrase?: string;
      bs?:          string;
  };
}

export interface createUser {
    id:       number;
    name:     string;
    email:    string;
    website: string;
    company: {
        name: string;
    }
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule, MatIconModule,ButtonCreateUserFormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
    readonly usersApiService = inject(UsersApiService);

    readonly usersService = inject(UsersService);

    constructor() {
        this.usersApiService.getUseres().subscribe(
            (response: User[]) => {
                this.usersService.setUsers(response);
            }
        )
    }

    deleteUser(id: number) {
        this.usersService.deleteUser(id);
    }

    editUser(user: User) {
        this.usersService.editUser({
          ...user,
          company: {
            name: user.company.name
          }  
        })
    }


    // editUser(user: User) {
    //     this.usersService.editUser({...user});
    // }

    public createUser(formData: createUser) {
        this.usersService.createUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name:formData.company.name,
            },
        });
        console.log(formData)
    }
  }

