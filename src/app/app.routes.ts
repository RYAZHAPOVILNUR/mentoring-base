import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todos-list.component/todos-list.component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
