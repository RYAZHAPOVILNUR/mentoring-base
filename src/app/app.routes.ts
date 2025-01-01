import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';




export const routes: Routes = [
  {
  path : 'users',
 component : UsersListComponent,
  } ,
  {
    path: 'header',
    component: HeaderComponent,

  },
  {
    path: 'footer',
    component : FooterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
