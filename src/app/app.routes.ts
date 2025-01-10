import { Routes } from "@angular/router";
import { UsersListComponent } from "./user-list/users-list.component";
import { MainComponent } from "./main/main.component";
import { TodosListComponent } from "./todos-list/todos-list.component";

export const routes: Routes = [
    {
        path: "",
        component: MainComponent,
    },
    {
        path: "users",
        component: UsersListComponent,
    },
    {
        path: "todos",
        component: TodosListComponent,
    }
];
