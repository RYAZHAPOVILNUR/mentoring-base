import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';

export const routes: Routes = [
    { path: '', component: Component },
  { path: 'users',component: UsersListComponent }
];
