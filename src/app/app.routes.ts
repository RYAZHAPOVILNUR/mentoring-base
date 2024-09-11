import { Routes } from '@angular/router';
import { UsersListComponent } from "./users-list/users-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
];
