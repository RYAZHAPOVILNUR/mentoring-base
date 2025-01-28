import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomePageComponent } from './home/home.component';
// import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'users', component: UsersListComponent},

  // {path: 'test', component: TestComponent}
];
