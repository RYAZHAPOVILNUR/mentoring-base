import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { UsersApiService } from '../services/users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { CreateUser, User } from '../interfaces/user-interface';
import { ShadowForUser } from '../directives/user.directive';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/user.actions';
import { selectUsers } from './store/user.selector';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe,CreateUserFormComponent, ShadowForUser],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsersListComponent implements OnInit {
  readonly usersApiService = inject(UsersApiService);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers)

  ngOnInit() {
    this.loadUsers();
  }
   
  private loadUsers() {
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.store.dispatch(UsersActions.set({ users: response }));
    });
  }
  
  deleteUser (id: number) {
    this.store.dispatch(UsersActions.delete({id}));
  }

  editUser (user: User) {
    this.store.dispatch(UsersActions.edit({user}))
  }

  createUser (formData: CreateUser) {
    const newUser: User = {
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
    };
    this.store.dispatch(UsersActions.create({user: newUser}))
  }
}  