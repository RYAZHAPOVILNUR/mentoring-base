import {AsyncPipe, NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject,} from '@angular/core';
import {UserCardComponent} from './user-card/user-card.component';
import {UsersService} from '../../../services/users.service';
import {CreateUserFormComponent} from '../create-user-form/create-user-form.component';
import {User} from '../../../interfaces/user-interface';
import {MatDialog} from '@angular/material/dialog';
import {CreateUserDialogComponent} from '../create-user-form/create-user-dialog/create-user-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor,UserCardComponent, MatButtonModule ,AsyncPipe, CreateUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent{
  public usersService = inject(UsersService);

  constructor() {
  this.usersService.loadUsers()
  }

  // ngOnInit() {
  //   this.usersService.loadUsers();
  // }

  public createUser(formData: User) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
    });
  }

  public editUser(user: User) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.company.name,
      },
    });
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  readonly dialogTwo = inject(MatDialog);

  createUserDialog(): void {
    const dialogRef = this.dialogTwo.open(CreateUserDialogComponent, {
      data: { user: this.usersService.users$ },
    });

    dialogRef.afterClosed().subscribe((createResult: User) => {
      if (createResult) {
        this.createUser(createResult);
        this.openSnackBarTwo();
      }
    });
  }

  readonly snackBar = inject(MatSnackBar);

  readonly snackBarCreate = inject(MatSnackBar);

  openSnackBarTwo(): void {
    this.snackBar.open('Пользователь создан🐒', 'Закрыть', {
      duration: 2000,
    });
  }
}
