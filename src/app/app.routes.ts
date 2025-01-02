import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { MainComponent } from './main/main/main.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
];
