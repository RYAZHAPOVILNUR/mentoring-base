import { Routes } from '@angular/router';
import {UsersListComponent} from "./users-list/users-list.component";
import {AppComponent} from "./app.component";
import {LayoutComponent} from "./layout/layout.component";
import {MainContentComponent} from "./main-content/main-content.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent, children: [
      {path: "", component: MainContentComponent},
      {path: "users", component: UsersListComponent},
    ]
  }
];
