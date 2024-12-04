import { AsyncPipe, CommonModule, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Input } from "@angular/core";
import { createUser, User } from "./users-list.interface"; 
import { UsersApiService } from "../users-api.service";
import { UserListCardComponent } from "./user-list-card/user-list-card.component";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { MatDialog} from "@angular/material/dialog";
import { DeleteUserDialogComponent } from "./delete-user-dialog/delete-user-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, Observable, take } from "rxjs";


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
    private snackBar = inject(MatSnackBar);
    
  @Input()
  readonly dialog = inject(MatDialog);
  users$!: Observable<User[]>;
  
    constructor() {
      this.UsersApiService.getUsers().subscribe(
          (response: User[]) => {
            this.usersService.setUsers(response);
            console.log('USERS', this.usersService);
        });
    }openDeleteDialog(id: number): void {
      const dialogRef = this.dialog.open(DeleteUserDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteUser(id); 
          this.snackBar.open('Пользователь успешно удалён', 'Закрыть', {
            duration: 3000,
          });
        } else {
          this.snackBar.open('Отмена удаления',  'Закрыть', {
            duration: 3000,
          });
        }
      })
    }

    deleteUser(id: number) {
      this.usersService.deletedUsers(id);
    }

    editUser(user: User) {
      this.usersService.editUser(user)
    }

    openCreateUserDialog(): void {
      const dialogRef = this.dialog.open(CreateUserFormComponent, {
        width: '500px', height: '500px',
        data: {} 
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.createUser(result); 
        }
      });
    }

    public createUser(formDate: createUser) {
      this.usersService.users$
        .pipe(
          take(1),
          map((users) =>
            users.find((existingUser) => existingUser.email === formDate.email)
          )
        )
        .subscribe((existingUser) => {
          if (existingUser !== undefined) {
            this.snackBar.open('Такой Email уже существует', 'ok', {
              duration: 3000,
            });
          } else {
            this.usersService.createUsers({
              id: new Date().getTime(),
              name: formDate.name,
              email: formDate.email,
              website: formDate.website,
              company: {
                name: formDate.company.name,
              },
            });
            this.snackBar.open('Новый пользователь создан', 'ok', {
              duration: 3000,
            });
          }
        });
      }

  }   
