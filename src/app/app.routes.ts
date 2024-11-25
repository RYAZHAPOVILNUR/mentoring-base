import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: '',
    component: HomepageComponent,
  },
];
