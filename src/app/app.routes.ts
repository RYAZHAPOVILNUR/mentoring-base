import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { headerComponent } from './header/header.component';

export const routes: Routes = [
    {
        path: 'weAre', 
        component: headerComponent
    }, 
    {
        path: 'users', 
        component: UsersListComponent
    }
];
