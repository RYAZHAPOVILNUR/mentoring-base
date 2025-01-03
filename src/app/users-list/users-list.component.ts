import { AsyncPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { UserFormComponent } from '../create-user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ShadowDirective } from '../directives/shadow-user-card.directive';
import { User } from '../interfaces/interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    MatSnackBarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ShadowDirective,
  ],
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
    this.usersApiService.getUsers().subscribe((res: User[]) => {
      this.usersService.setUsers(res);
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  createUser(formData: User) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      company: {
        name: formData.company?.name,
      },
      email: formData.email,
      phone: formData.phone,
    });
  }

  editUser(user: User) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.company?.name,
      },
    });
  }
}
export { User };

