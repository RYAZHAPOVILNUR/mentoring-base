import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';


export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent,
        pathMatch: 'full'
    },

    {
        path: 'homepage',
        component: HomepageComponent,
        pathMatch: 'full'
    }
];