import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        pathMatch: 'full'

    },
    {
        path: 'users',
        component: UsersListComponent,
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: TodosListComponent,
        pathMatch: 'full'
    },
];
