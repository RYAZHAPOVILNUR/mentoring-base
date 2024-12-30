import { Routes } from '@angular/router';
import { UsersListComponent } from './user-list/users-list.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent,
    },
    {
        path: '',
        component: MainComponent,
    }
];
