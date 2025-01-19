import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UserApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { Observable } from "rxjs";
import { User } from "../users.interface";

@Component ({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrl: './users-list.component.scss',
	standalone: true,
	imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
	readonly usersApiService = inject(UserApiService);
	readonly usersService = inject(UsersService);
	
	users$: Observable<User[]>
	constructor() {
		this.users$ = this.usersService.usersSubject;
		this.usersApiService.getUsers().subscribe(
			(response: User[]) => {
				this.usersService.setUsers(response);
			}
		)
		
	}
	
	public deleteUser(id: number) {
		this.usersService.deleteUser(id)
	}
	
	public createUser(formData: User) {
		this.usersService.createUser({
			id: new Date().getTime(),
			name: formData.name,
			email: formData.email,
			website: formData.website,
			phone: formData.phone,
			company: {
				name: formData.name,
			}
		})
	}
}
