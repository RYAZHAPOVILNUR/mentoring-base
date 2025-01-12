import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {path: 'users' , component: UserListComponent},
    {path: 'todos' , component: TodosListComponent}
];
