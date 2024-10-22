import { Routes } from '@angular/router';
import { UsersListComponent } from "./users-list/users-list.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { AppComponent } from "./app.component";
import { TodosListComponent } from "./todos-list/todos-list.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'todos',
    component: TodosListComponent
  }
];
