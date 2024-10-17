import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomePageCompoment } from './homePage/home-page.cpmponent';
import { TodoListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageCompoment,
    },

    {
        path:'users',
        component: UsersListComponent,
        pathMatch: 'full'
    },

    {
        path:'todos',
        component: TodoListComponent,
        pathMatch: 'full'
    }


];
