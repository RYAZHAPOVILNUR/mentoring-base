import { AsyncPipe, CommonModule, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { User } from "./users-list.interface"; 
import { UsersApiService } from "../users-api.service";
import { UserListCardComponent } from "./user-list-card/user-list-card.component";
import { UsersService } from "../users.service";

// const consoleResponse = (response: any) => console.log(response);


@Component({
    selector: 'app-user-list',
    templateUrl: './users-list.components.html',
    styleUrl: './users-list.components.scss',
    standalone: true,
    imports: [NgFor, CommonModule, UserListCardComponent, AsyncPipe] ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
    readonly UsersApiService = inject(UsersApiService)
    readonly usersService = inject(UsersService);


    constructor() {
      this.UsersApiService.getUsers().subscribe(
          (response: User[]) => {
            this.usersService.setUsers(response);
            console.log('USERS', this.usersService);
        });
      
    }deleteUser(id: number) {
      this.usersService.deletedUsers(id);
    }
}
