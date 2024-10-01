import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomePageCompoment } from './homePage/home-page.cpmponent';

export const routes: Routes = [
    {
        path: '',
        component: HomePageCompoment,
    },

    {
        path:'users',
        component: UsersListComponent,
        pathMatch: 'full'
    }
];
