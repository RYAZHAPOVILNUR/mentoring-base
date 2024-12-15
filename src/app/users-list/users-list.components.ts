import { AsyncPipe, CommonModule, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Input } from "@angular/core";
import { User } from "./users-list.interface"; 
import { UsersApiService } from "../users-api.service";
import { UserListCardComponent } from "./user-list-card/user-list-card.component";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { MatDialog} from "@angular/material/dialog";
import { DeleteUserDialogComponent } from "./delete-user-dialog/delete-user-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ShadowDirective } from "../directiv/shadow.derictiv";
import { Store } from "@ngrx/store";
import { UsersActions } from "./store/users.action";
import { selectUsers } from "./store/users,selectors";
import { EditUserDialogComponent } from "./edit-user-dialog/edit-user-dialog.component";


// const consoleResponse = (response: any) => console.log(response);


@Component({
    selector: 'app-user-list',
    templateUrl: './users-list.components.html',
    styleUrl: './users-list.components.scss',
    standalone: true,
    imports: [NgFor, CommonModule, UserListCardComponent, AsyncPipe, ShadowDirective] ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
    readonly UsersApiService = inject(UsersApiService)
    private snackBar = inject(MatSnackBar);
    private readonly store = inject(Store);
    public readonly users$ = this.store.select(selectUsers);
    readonly dialog = inject(MatDialog);

 
 

    constructor() {
      this.UsersApiService.getUsers().subscribe(
          (response: User[]) => {
            this.store.dispatch(UsersActions.set({ users: response }));
        });
      
    }deleteUser(id: number): void {
      const dialogRef = this.dialog.open(DeleteUserDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.store.dispatch(UsersActions.delete({ id})); 
          this.snackBar.open('Пользователь успешно удалён', 'Закрыть', {
            duration: 3000,
          });
        } else {
          this.snackBar.open('Отмена удаления',  'Закрыть', {
            duration: 3000,
          });
        }
      });
    }

    editUser(user: User) {
      const dialogRef = this.dialog.open(EditUserDialogComponent, {
        data: { user }
      });
  
      dialogRef.afterClosed().subscribe((editResult) => {
        if (editResult) {
          this.store.dispatch(UsersActions.edit({ user: editResult }));
          this.snackBar.open('Пользователь успешно обновлен', 'Закрыть', { duration: 3000 });
        } else {
          this.snackBar.open('Отмена редактирования', 'Закрыть', { duration: 3000 });
        }
      });
    }

    crateUser(): void {
      const dialogRef = this.dialog.open(CreateUserFormComponent, {
        width: '500px', height: '600px',
        data: {},
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          const newUser = {
            id: new Date().getTime(),
            name: result.name,
            email: result.email,
            website: result.website,
            company: {
              name: result.company.name,
            },
            phone: result.phone,
          };
          this.store.dispatch(UsersActions.create({ user: newUser }));
          this.snackBar.open('Новый пользователь создан', 'Закрыть', {
              duration: 3000,
          });
        } 
      });
    }
}

