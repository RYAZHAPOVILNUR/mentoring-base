import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { User } from "../users-list.component";
import { MatDialog } from '@angular/material/dialog'; // 1 действие чтобы открывалась модалка
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { DeleteUserDialogComponent } from "../delete-user-dialog/delete-user-dialog.component";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
})

export class UserCardComponent {
    @Input()
    user!: User

    @Output()
    // deleteUser = new EventEmitter()
    deleteUser = new EventEmitter<number> ();

    @Output()
    editUser = new EventEmitter()

    readonly dialog = inject(MatDialog); // 1 действие чтобы открывалась модалка

    openDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
          data: {user: this.user},
        });

        dialogRef.afterClosed().subscribe((editResult) => {
          console.log('MODAL CLOSED', editResult);
        //   if (!editResult) return;
            if(editResult){
                this.editUser.emit(editResult)
            }
        });
      }

    // openDeleteDialog(): void {
    //   const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
    //     data: {user: this.user},
    //   });

    //   dialogRef.afterClosed().subscribe((deleteResult) => {
    //     console.log('MODALdelete CLOSED', deleteResult);
    //   //   if (!editResult) return;
    //       if(deleteResult){
    //           this.deleteUser.emit(deleteResult)            }
    //     });
    //   }

      openDelDialog(): void { //2 действие - функция с material ui чтобы метод открывал компонент DeleteUserDialogComponent
        const dialogDelRef = this.dialog.open(DeleteUserDialogComponent, {
          data: { user: this.user.id }, //2 действие - это то что отправляем в данные после нажатия; dialog - это inject(MatDialog) строка 24
        });
    
        dialogDelRef.afterClosed().subscribe(deleteResult => {
          // console.log('The delete-dialog was closed', deleteResult);
          if (deleteResult) {
            // this.onDeleteUser(userId); {
            console.log(deleteResult)
              this.deleteUser.emit(deleteResult) //emit - отправка события
            // }
          }
        });
      }
    }

  //   onDeleteUser(userId: number) {
  //     this.deleteUser.emit(userId)
  // }
