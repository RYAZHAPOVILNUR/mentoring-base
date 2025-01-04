import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { MainComponent } from './main/main.component';
import { Homework9Component } from './homeworks/homework-9/homework-9.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserListComponent,
        children: [
            { path: '', component: Homework9Component },
        ]
    }
];
