import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject} from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { CreateUserDialogComponent } from "./create-user-dialog/create-user-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Store } from "@ngrx/store";
import { UsersAction } from "./store/user.actions";
import { selectUsers } from "./store/users.selectors";
import { IUsers } from "../interfaces/users.interface";
import { take } from "rxjs";
 

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgFor,
              UserCardComponent,
              AsyncPipe,
              CreateUserDialogComponent,
              MatIconModule,
              MatButtonModule]
})

export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    readonly dialog = inject(MatDialog);
    private readonly store = inject(Store);
    public readonly users$ = this.store.select(selectUsers);
    readonly cashedData = localStorage.getItem('users')

    constructor() {

        this.users$.pipe(take(1)).subscribe(
            users => console.log(users)
        );

        if (this.cashedData) {
            
            console.log('данные есть в локал')
            this.store.dispatch(UsersAction.set({users: JSON.parse(this.cashedData)}))
            return

        } else {
            
            console.log('Данных нет в локал')
            this.usersApiService.getUsers().pipe(take(1)).subscribe(
            (response: any) => {
                this.store.dispatch(UsersAction.set({ users: response }))
                localStorage.setItem('users', JSON.stringify(response))
            })
        }
    };
    
    public deleteUser(id: number) {
        this.store.dispatch(UsersAction.delete({ id }));

        const usersLocal = localStorage.getItem('users');
        const users = usersLocal ? JSON.parse(usersLocal) : [];
        const userId = users.findIndex((user: IUsers) => user.id === id)

        if (userId !== -1) { 
            users.splice(userId, 1);
            localStorage.setItem('users', JSON.stringify(users));
            console.log(`Пользователь удален`);
          } else {
              console.log(`Пользователь с id ${id} не найден в local storage`);
          }


    };


    public editUser(user: any) {
        const newUser = {
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            website: user.website,
            company: {
            name: user.companyName
        }}
        
        this.store.dispatch(UsersAction.edit({ user: newUser }));

        const usersLocal = localStorage.getItem('users');
        const users = usersLocal ? JSON.parse(usersLocal) : [];
        const userId = users.findIndex((userLS: IUsers) => userLS.id === user.id);

        if (userId !== -1) {
          
            users[userId] = newUser;
            localStorage.setItem('users', JSON.stringify(users));
            console.log(`Пользователь отредактирован`);
       } else {

           console.log(`Пользователь с id ${user.id} не найден в local storage`);
       }
   }




    public createUser(formData: any) {
        console.log('ДАННЫЕ ФОРМЫ:', formData);
        const newUser = {
                id: new Date().getTime(),
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                website: formData.website,
                company: {
                name: formData.companyName
            }   
        }

        this.store.dispatch(UsersAction.create({ user: newUser }));
        
        const usersLocal = localStorage.getItem('users');
        const users = usersLocal ? JSON.parse(usersLocal) : [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

    };


    openDialog(): void {
            const dialogRef = this.dialog.open(CreateUserDialogComponent, {
              data: 1234312423,
            });
        
            dialogRef.afterClosed().pipe(take(1)).subscribe(createResult => {
              console.log('МОДАЛКА ЗАКРЫТА', createResult);
              if (!createResult) return;
              this.createUser(createResult)
            });
          }



    
}