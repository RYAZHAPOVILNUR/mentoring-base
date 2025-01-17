import { AsyncPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { CreateUserFormComponent } from '../../forms/create-user-form/create-user-form.component';
import { User } from '../../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/users.action';
import { selectUsers } from './store/users.selector';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersApiService } from '../../../services/api-services/users-api.service';

@Component({
  selector: 'app-user-list',
  imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  private readonly dialog: MatDialog = inject(MatDialog);
  readonly usersApiService = inject(UsersApiService);
  private readonly store = inject(Store);
  public readonly users$: Observable<User[]> = this.store.select(selectUsers);
  private snakeBarMessageSubject$ = new BehaviorSubject<string>('');
  message$ = this.snakeBarMessageSubject$.asObservable();
  private _snackBar = inject(MatSnackBar);

  ngOnInit() {
    this.usersApiService.getUsers().subscribe((users) => {
      this.store.dispatch(UsersActions.set({ users: users }));
    });
  }

  createUser() {
    this.dialog
      .open(CreateUserFormComponent, {
        data: {
          user: null,
        },
      })
      .afterClosed()
      .subscribe((user: User) => {
        if (!user) return;
        this.store.dispatch(
          UsersActions.create({
            user: {
              id: new Date().getTime(),
              name: user.name,
              email: user.email,
              phone: user.phone,
              website: user.website,
              company: {
                name: user.company.name,
              },
            },
          })
        );
        this.showSnackBarMessage('Новый пользователь успешно добавлен');
      });
  }

  editUser(user: User) {
    this.dialog
      .open(CreateUserFormComponent, {
        data: {
          user: user,
        },
      })
      .afterClosed()
      .subscribe((editedUser: User) => {
        if (!editedUser) return;
        this.store.dispatch(UsersActions.edit({ user: editedUser }));
        this.showSnackBarMessage('Пользователь успешно редактирован');
      });
  }

  deleteUser(id: number) {
    this.store.dispatch(UsersActions.delete({ id: id }));
    this.showSnackBarMessage('Пользователь успешно удален');
  }

  showSnackBarMessage(message: string) {
    this.snakeBarMessageSubject$.next(message);
    this.message$.subscribe((message) => {
      this._snackBar.open(message, 'Close', { duration: 3000 });
    });
  }
}
