import { AsyncPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { User } from '../../../interfaces/user.interface';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/users.action';
import { selectUsers } from './store/users.selector';

@Component({
  selector: 'app-user-list',
  imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  private readonly store = inject(Store);
  public readonly users$: Observable<User[]> = this.store.select(selectUsers);

  ngOnInit() {
    this.store.dispatch(UsersActions.load());
  }

  createUser() {
    this.store.dispatch(UsersActions.openCreateUserDialog());
  }

  editUser(user: User) {
    this.store.dispatch(UsersActions.openEditUserDialog({ user }));
  }

  deleteUser(id: number) {
    this.store.dispatch(UsersActions.delete({ id: id }));
  }
}
