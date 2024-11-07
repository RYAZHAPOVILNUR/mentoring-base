import { Routes } from '@angular/router';
import { UsersListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { homeworkComponent } from './HW/homework.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AdminListComponent } from './adminonly/adminsonly.component';
import { isAdminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {path: 'users', component: UsersListComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'hw', component: homeworkComponent},
    {path: 'todos', component: TodosListComponent},
    {path: 'admin', component: AdminListComponent, canActivate: [isAdminGuard] },
];

