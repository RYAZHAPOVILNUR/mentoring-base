import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/homePage.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent, } from './components/location/location.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

export const routes: Routes = [
    {path: 'users', component: UsersListComponent},

    {path: 'header', component: HeaderComponent},

    {path: '', component: HomePageComponent},

    {path: 'footer',component: FooterComponent},

    {path: 'location',component: LocationComponent},

    {path: 'todos', component: TodosListComponent}
    
    ];


