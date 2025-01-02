import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
	{
		path: '',
		component: HomepageComponent	
	},
	
	{
		path: 'users',
		component: UsersListComponent
	},
	
];
