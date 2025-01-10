import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service.js';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service.js';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component.js';
import { User } from '../user.interface.ts.js';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component.js';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, MatCardModule,MatButtonModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  usersService = inject(UsersService);

  private readonly dialog = inject(MatDialog);

  private _snackBar = inject(MatSnackBar);

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  createUser() {
    const dialogRef = this.dialog.open(CreateUserFormComponent);

    dialogRef.afterClosed().subscribe((form) => {
      if (form) {
        this.usersService.createUser({
          id: new Date().getTime(),
          name: form.name,
          email: form.email,
          website: form.website,
          company: {
            name: form.companyName,
          },
        });
        this._snackBar.openFromComponent(SnackbarComponent, {
                  duration: 5000,
                  data: {
                  isCreateUser: true,
                  }
                });
      }
    });
  }

  editUser(user: User): void {
    this.usersService.editUser(user);
  }

  constructor() {
    this.usersApiService
      .getUsers()
      .subscribe((item) => this.usersService.setUsers(item));
  }
}
