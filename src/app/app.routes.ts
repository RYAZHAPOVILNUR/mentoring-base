import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: ' ',
    component: HeaderComponent,
  },
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
];
