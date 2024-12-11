import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { IUser } from "../../interfaces/user.interface";
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NumberEditingPipe } from "../../pipes/number-editing.pipe";
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from "@angular/forms";



@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [NumberEditingPipe, MatTooltipModule]
})

export class UserCardComponent {
    private snackBar = inject(MatSnackBar)

    @Input()
    public user!: IUser

    @Output()
    public deleteUser: EventEmitter<number> = new EventEmitter<number>()

    @Output()
    public editUser = new EventEmitter<IUser>()

    readonly dialog = inject(MatDialog)
    above: any;

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
        this.snackBar.open('Пользователь успешно удалён', 'Закрыть')
    }

    positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
    position = new FormControl(this.positionOptions[0]);
}