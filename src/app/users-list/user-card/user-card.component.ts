import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { IUser } from "../../interfaces/user.interface";
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";



@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true
})

export class UserCardComponent<T extends IUser> {
    constructor(private snackBar: MatSnackBar) {}

    @Input() 
    public user!: T

    @Output() 
    public deleteUser: EventEmitter<number> = new EventEmitter<number>()

    @Output()
    public editUser = new EventEmitter<IUser>()

    readonly dialog = inject(MatDialog)

    openDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
            data: { user: this.user }
        })

        dialogRef.afterClosed().subscribe((editResult) => {
            console.log('Модалка закрылась, Значение формы:', editResult);
            this.editUser.emit(editResult)
        })
    }

    public onDeleteUser(userId: number): void {
        this.deleteUser.emit(userId)
    }

    public snackBarUserDelete() {
        this.snackBar.open('Пользователь успешно удалён', 'Закрыть')
    }
}