import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { User } from "../users-list.component";
import { MatDialog } from '@angular/material/dialog'; // 1 действие чтобы открывалась модалка
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { DeleteUserDialogComponent } from "../delete-user-dialog/delete-user-dialog.component";
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { CreateUserDialogComponent } from "../create-user-dialog/create-user-dialog.component";
import { UpperCasePipe } from "@angular/common";
import { CustomUpperCasePipe } from "../../pipes/upper-case.pipe";
import { RedDirective } from "../../directives/red.directive";
import { CustomTelephonePipe } from "../../pipes/telephone.pipe";
import { ShadowDirective } from "../../directives/shadow.directive";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip'; 

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [CustomUpperCasePipe, RedDirective, CustomTelephonePipe, ShadowDirective, MatButtonModule, MatIconModule, MatTooltipModule]
})

export class UserCardComponent {
    @Input()
    user!: User

    @Output()
    deleteUser = new EventEmitter<number> ();

    @Output()
    editUser = new EventEmitter()

    @Output()
    createUser = new EventEmitter()

    readonly dialog = inject(MatDialog); // 1 действие чтобы открывалась модалка
    readonly snackbar = inject(MatSnackBar);

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

      openDelDialog(): void { //2 действие - функция с material ui чтобы метод открывал компонент DeleteUserDialogComponent
        const dialogDelRef = this.dialog.open(DeleteUserDialogComponent, {
          data: { user: this.user }, //2 действие - это то что отправляем в данные после нажатия; dialog - это inject(MatDialog) строка 24
        });
    
        dialogDelRef.afterClosed().subscribe(deleteResult => {
          // console.log('The delete-dialog was closed', deleteResult);
          if (deleteResult) {
            console.log(deleteResult)
              this.deleteUser.emit(this.user.id) //emit - отправка события
              this.snackbar.open('USER deleted', 'OK', {duration: 3000})
          }
          else {
            this.snackbar.open('DELETE canseled', '', {duration: 3000})
          }
        });
      }

      openCreateDialog(): void {
        const dialogRef = this.dialog.open(CreateUserDialogComponent, {
          data: {user: this.user},
        });

        dialogRef.afterClosed().subscribe((createResult) => {
          console.log('MODAL CLOSED', createResult);
            if(createResult){
                this.createUser.emit(createResult)
                this.snackbar.open('USER created', 'OK', {duration: 3000})
            }
            else {
              this.snackbar.open('CREATE canseled', '', {duration: 3000})
            }  
        });
      }

    }
