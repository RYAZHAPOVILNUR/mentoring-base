import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

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
        path: 'todo',
        component: ToDoListComponent
    }
    
];
