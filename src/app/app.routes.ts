import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { MainListComponent } from './main-list/main-list.component';
import { HomeWorkComponent } from './HomeWork/homeWork.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainListComponent
    },
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: 'dz',
        component: HomeWorkComponent
    },
    {
        path: 'todos',
        component: TodosListComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard]
    },
];
