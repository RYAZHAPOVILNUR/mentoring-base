import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersListComponent } from './user-list/user-list.component';
import { TodoCardComponent } from './todo-card/todo-card/todo-card.component';
import { TodosListComponent } from './todo-card/todos-list.component';

export const routes: Routes = [
{ path: '', component: MainComponent },
{ path: 'users', component: UsersListComponent },
{ path: 'todos', component: TodosListComponent},
{ path: '**', redirectTo: '' }
];

