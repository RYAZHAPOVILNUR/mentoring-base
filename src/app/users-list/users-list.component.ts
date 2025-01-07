import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject} from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user.card.component";
import { User, userCreate } from "./user-interface";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  readonly UsersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.UsersApiService.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response);
      }
    )

    this.usersService.usersObservable$.subscribe(
      users => console.log(users))
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id)
  }

  public createUser(formData: userCreate) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.company.name
      }
    });
    console.log('ДАННЫЕ ФОРМЫ:');
    console.log(new Date().getTime());
    console.log(formData);


  }
}




