import { Routes } from '@angular/router';
import { Header } from './header/header.component';
import { UsersListComponent } from './users-list/users-list.component';

export const routes: Routes = [
    {
        path: '',
        component: Header,
        pathMatch: 'full'

    },
    {
        path: 'users',
        component: UsersListComponent,
        pathMatch: 'full'
    },
];
