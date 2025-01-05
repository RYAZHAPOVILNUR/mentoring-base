import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path: 'home', component: HomepageComponent},
    {path: 'users', component: UsersListComponent},
];
