import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: 'todos',
        component: TodosListComponent
    }
];