import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, output, Output} from "@angular/core";
import { IUsers } from "../../interfaces/users.interface";
import { MatDialog } from '@angular/material/dialog'
import { EditUserDialogComponent } from "./edit-user-dialog/edit-user-dialog.component";
import { DeleteUserDialogComponent } from "./delete-user-dialog/del-user-dialog.component";
import { MatCardModule, MatCardTitle} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button'
import { PhoneWithOnlyNumbers } from "../../pipes/phone-withonly-numbers.pipe";
import {MatTooltipModule} from '@angular/material/tooltip';
import { take } from "rxjs";



@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
              EditUserDialogComponent,
              MatCardModule,
              MatButtonModule,
              PhoneWithOnlyNumbers,
              MatTooltipModule,
              PhoneWithOnlyNumbers,
              MatCardTitle
            ]
})

export class UserCardComponent {
    @Input()
    user!: IUsers;

    @Output()
    deleteUser = new EventEmitter()

    @Output()
    editUser = new EventEmitter()


    readonly dialog = inject(MatDialog)



    openDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
          data: {user: this.user},
        });
    
        dialogRef.afterClosed().pipe(take(1)).subscribe(editResult => {
          console.log('МОДАЛКА ЗАКРЫТА, ЗНАЧЕНИЕ ФОРМЫ -', editResult );
          if (!editResult) return;
          this.editUser.emit(editResult)
        });
      }


      openDialogDelete(): void {
        const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
          data: {user: this.user}
        });
    
        dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
          console.log('The dialog was closed'); 
          if (!result) return;
          this.deleteUser.emit(result)
        });
      }



    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId)
    }
}