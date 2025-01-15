import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path: 'users', component: UsersListComponent},
    {path: 'header', component: HeaderComponent}
];
