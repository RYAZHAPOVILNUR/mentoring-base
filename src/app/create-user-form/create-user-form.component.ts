import {NgFor, NgIf} from '@angular/common';
import {Component, EventEmitter, inject, Output} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {CreateUserDialogComponent} from '../users-list/create-user-dialog/create-user-dialog.component';
import {CreateUserInterface} from '../interfaces/user-interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-create-user-form',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, NgFor, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTooltipModule],
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {

    @Output()
    public createUser: EventEmitter<CreateUserInterface> = new EventEmitter<CreateUserInterface>();

    readonly dialog: MatDialog = inject(MatDialog);

    public snackBar: MatSnackBar = inject(MatSnackBar);

    openCreateDialog(): void {
        // открываем модалку. Ничего внутрь не передаем, а зачем нам передавать data { user }? мы же его только создаем. То, что ты передашь будет = undefined
        const dialogRef = this.dialog.open(CreateUserDialogComponent);

        dialogRef.afterClosed().subscribe((result: CreateUserInterface) => {
            // если результат true (то-есть данные пришли), тогда эмитим(отправляем) эти данные в users-list
            if (result) {
                this.createUser.emit(result);
                this.snackBar.open('Пользователь создан!', 'Ok', {
                    duration: 5000
                });
            } else {
                this.snackBar.open('Отмена создания!', 'Ok', {
                    duration: 5000
                });
            }
        })
    }
}
