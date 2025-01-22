import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { headerComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [ 
    {
        path: 'users', 
        component: UsersListComponent
    }, 
    {
        path: 'todos', 
        component: TodoListComponent
    }
];
