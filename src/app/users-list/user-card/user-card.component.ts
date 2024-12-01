import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {UserInterface} from '../../interfaces/user-interfaces';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {EditUserDialogComponent} from '../edit-user-dialog/edit-user-dialog.component';
import {DeleteUserDialogComponent} from '../delete-user-dialog/delete-user-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomUpperCasePipe} from '../../pipes/upper-case.pipe';
import {ShadowHighlightDirective} from '../../directives/shadow.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [MatIconModule, MatDialogModule, CustomUpperCasePipe, ShadowHighlightDirective, MatButtonModule, MatTooltipModule],
})
export class UserCardComponent {

    // @Input() user_input: any - это входное свойство для получения данных
    @Input()
    user!: UserInterface;

    // @Output() — декоратор, используемый для создания событий
    @Output()
    // EventEmitter — это класс Angular, он же обработчик события который создает событие
    public deleteUser: EventEmitter<number> = new EventEmitter<number>(); // deleteUser используем в файле html и в файле html закидываем в круглые скобки(deleteUser)="здесь он будет вызывать другую переменную"

    @Output()
    public editUser: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

    readonly dialog: MatDialog = inject(MatDialog);

    public snackBar: MatSnackBar = inject(MatSnackBar);

    openEditDialog(): void {
        const dialogRef: MatDialogRef<EditUserDialogComponent> = this.dialog.open(EditUserDialogComponent, {
            data: {user: this.user},
        });

        dialogRef.afterClosed().subscribe((editResult: any) => {
            if (editResult) {
                this.editUser.emit(editResult);
                this.snackBar.open('Данные пользователя обновились!', 'Ok', {
                    duration: 5000
                });
            } else {
                this.snackBar.open('Отмена изменения!', 'Ok', {
                    duration: 5000
                });
            }
        });
    }


    openDeleteDialog(): void {
        const dialogRef: MatDialogRef<DeleteUserDialogComponent> = this.dialog.open(DeleteUserDialogComponent, {
            data: {user: this.user},
        });

        dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
            if (result) {
                this.deleteUser.emit(this.user.id);
                this.snackBar.open('Пользователь удален!', 'Ok', {
                    duration: 5000
                });
            } else {
                this.snackBar.open('Отмена удаления!', 'Ok', {
                    duration: 5000
                });
            }
        });
    }
}
