import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import {MainComponent } from './main/main.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { adminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'todos',
        component: TodosListComponent
    },

    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [adminGuard]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
