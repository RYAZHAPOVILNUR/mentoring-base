import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {path: '',component:HomePageComponent},
  {path: 'users',component:UsersListComponent}
];
