import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersListComponent } from './user-list/user-list.component';

export const routes: Routes = [
{ path: '', component: MainComponent },
{ path: 'users', component: UsersListComponent },
{ path: '**', redirectTo: '' }
];

