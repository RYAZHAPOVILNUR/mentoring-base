import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { MainContent } from './main-contant/main-contant.component';

export const routes: Routes = [
    {path:'main', component: MainContent},
    {path: 'users-list', component: UsersListComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'}
];
