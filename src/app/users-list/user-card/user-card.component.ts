import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, output, Output} from "@angular/core";
import { IUsers } from "../users-list.component";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle } from '@angular/material/dialog'
import { EditUserDialogComponent } from "./edit-user-dialog/edit-user-dialog.component";
import { DeleteUserDialogComponent } from "./delete-user-dialog/delete-user-dialog.component";


@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [EditUserDialogComponent]
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
    
        dialogRef.afterClosed().subscribe(editResult => {
          console.log('МОДАЛКА ЗАКРЫТА, ЗНАЧЕНИЕ ФОРМЫ -', editResult );
          if (!editResult) return;
          this.editUser.emit(editResult)
        });
      }


      // openDialogDelete(): void {
      //   this.dialog.open(DeleteUserDialogComponent);
      // }



    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId)
    }
}