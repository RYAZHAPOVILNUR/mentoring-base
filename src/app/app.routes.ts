import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { BodyCComponent } from './body-c/body-c.component';

export const routes: Routes = [
    {
        path: '', component: BodyCComponent
    },
    {
        path: 'users', component: UsersListComponent
    }
];
