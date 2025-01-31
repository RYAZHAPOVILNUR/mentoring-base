import { Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { HeaderComponent } from "./component/header/header.component";
import { HomepageComponent } from "./component/homepage/homepage.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent,
    pathMatch: "full",
  },
  {
    path: "users",
    component: UsersListComponent,
    pathMatch: "full",
  },
];
