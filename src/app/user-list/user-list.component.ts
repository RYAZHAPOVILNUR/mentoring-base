import { AsyncPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersApiService } from '../users-api.service';
import { UsersService } from '../users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../interfaces/users.interface';
import { CreateEditUserFormComponent } from '../create-edit-user-form/create-edit-user-form.component';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeletionComponent } from '../confirm-deletion/confirm-deletion.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  readonly dialog = inject(MatDialog);
  users$ = this.usersService.users$;
  private readonly destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.usersApiService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => this.usersService.setUsers(users));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateEditUserFormComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((newUser) => {
      if (dialogRef.componentInstance.createEditUserForm.valid) {
        this.usersService.createUser(newUser);
      }
    });
  }

  openEditDialog(user: User) {
    const dialogRef = this.dialog.open(CreateEditUserFormComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe((userChanged) => {
      if (dialogRef.componentInstance.createEditUserForm.valid) {
        this.usersService.editUser(userChanged);
      }
    });
  }

  deleteUser(id: number) {
    const dialogRef = this.dialog.open(ConfirmDeletionComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.usersService.deleteUser(id);
      }
    });
  }
}
