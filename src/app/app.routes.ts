import { Routes } from '@angular/router';
import { UserListComponent } from './users-list/users-list.components';
import { HomeComponent } from './home/home.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent,
    }    ,
    {
        path: '',
        component: HomeComponent,
    }    ,
    {
        path: 'todos',
        component: TodosListComponent,
    }    , 
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard],
    }    
];
