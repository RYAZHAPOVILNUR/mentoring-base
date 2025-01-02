import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { UserFormComponent } from '../create-user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ShadowDirective } from '../directives/shadow-user-card.directive';

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, MatSnackBarModule, MatButtonModule, MatDividerModule, MatIconModule, ShadowDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  openDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {});

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.snackBar.open('Пользователь добавлен!', 'OK', {
          duration: 3000,
        });
        return this.usersService.createUser({
          id: new Date().getTime(),
          name: editResult.name,
          company: {
            name: editResult.company,
          },
          email: editResult.email,
          phone: editResult.phone,
        });
      }
    });
  }

  constructor() {
    this.usersApiService.getUsers().subscribe((res: any) => {
      this.usersService.setUsers(res);
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  createUser(formData: any) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      company: {
        name: formData.company,
      },
      email: formData.email,
      phone: formData.phone,
    });
  }

  editUser(user: any) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.company,
      },
    });
  }
}
