import { Routes } from '@angular/router';
import {UsersListComponent} from "./users-list/users-list.component";
import {AppComponent} from "./app.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {TodosListComponent} from "./todos-list/todos-list.component";

export const routes: Routes = [

      {path: "", component: MainContentComponent},
      {path: "users", component: UsersListComponent},
      {path: "todos", component: TodosListComponent},

];
