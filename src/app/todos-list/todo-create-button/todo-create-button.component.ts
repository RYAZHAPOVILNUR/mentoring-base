import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {TodoInterface} from '../../interfaces/todo-interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CreateTodoDialogComponent} from '../create-todo-dialog/create-todo-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-todo-create-button',
    standalone: true,
    imports: [MatIconModule, MatButtonModule, MatTooltipModule],
    templateUrl: './todo-create-button.component.html',
    styleUrl: './todo-create-button.component.scss'
})
export class TodoCreateButtonComponent {

    readonly dialog: MatDialog = inject(MatDialog);

    public snackBar: MatSnackBar = inject(MatSnackBar);

    @Output()
    public createTodoButtonAdd: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();

    openCreateTodoButtonDialog(): void {
        const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
            width: '350px',
        });

        dialogRef.afterClosed().subscribe((result: TodoInterface) => {
            if (result) {
                this.createTodoButtonAdd.emit(result);
                this.snackBar.open('ЗАДАЧА СОЗДАНА!', 'Ok', {
                    duration: 5000
                });
                console.log('step 1')
            } else {
                this.snackBar.open('ОТМЕНА СОЗДАНИЯ!', 'Ok', {
                    duration: 5000
                });
            }
        })
    }
}
