import { Routes } from '@angular/router';
import { UsersListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path: 'users', component: UsersListComponent},
    {path: 'header', component: HeaderComponent},
];

