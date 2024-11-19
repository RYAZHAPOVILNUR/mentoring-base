import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './users-list/users-list.components';
import { HomeComponent } from './home/home.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent,
    }    ,
    {
        path: '',
        component: HomeComponent,
    }    ,
    {
        path: 'todos',
        component: TodosListComponent,
    }    
];
