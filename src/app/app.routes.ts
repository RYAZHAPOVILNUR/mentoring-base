import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent,
        pathMatch: 'full'
    },
    {
        path: 'header',
        component: HeaderComponent,
        pathMatch: 'full'
    },
    {
        path: 'homepage',
        component: HomepageComponent,
        pathMatch: 'full'
    }
    
];