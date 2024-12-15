import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { homePageComponent } from './homePage/homePage.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { UserService } from './user.service';
import { AdminComponent } from './admin/admin.component';
import { isAdminFn } from './Guard/isAdmin.guards';

export const routes: Routes = [

{
    path: 'users',
    component: UsersListComponent 
} , 
{
    path: '', 
    component: homePageComponent 
},
{
    path: 'todos',
    component: TodosListComponent
},
{
    path: 'user',
    component: UserService
}, 
{
    path: 'admin',
    component: AdminComponent, canActivate:[isAdminFn]
}
];
