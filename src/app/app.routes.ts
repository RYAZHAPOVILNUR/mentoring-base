import { Routes } from '@angular/router';
import { UsersListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { homeworkComponent } from './HW/homework.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {path: 'users', component: UsersListComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'hw', component: homeworkComponent},
    {path: 'todos', component: TodosListComponent}
];

