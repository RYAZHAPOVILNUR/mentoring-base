import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomePageComponent } from './component/home-page/home-page.component';

  
export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent 
    },  
    {
        path: '',
        component: HomePageComponent
    }
]; 

