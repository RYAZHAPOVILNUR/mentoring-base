import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { User } from '../models/User';
import { UsersApiSevice } from '../services/users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../services/users.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    MatButtonModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiSevice);
  readonly usersService = inject(UsersService);
  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar)

  constructor() {
    this.usersApiService.getUsers().subscribe((res: User[]) => {
      this.usersService.setUsers(res);
    });

    this.usersService.users$.subscribe((user) => console.log(user));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent);

    dialogRef.afterClosed().subscribe((createResult) => {
      if (createResult) {
        this.usersService.createUser({
          id: new Date().getTime(),
          name: createResult.name,
          email: createResult.email,
          company: {
            name: createResult.companyName,
          },
          website: createResult.website,
        });
        this.snackBar.open('Пользователь успешно создан!', 'Ок', {
          duration: 3000
        })
      }else {
        this.snackBar.open('Ошибка! пользователь не создан', 'Ок', {
          duration: 3000
        })
      }
    });
    
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  editUser(user: any) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.companyName,
      },
    });
  }
}
