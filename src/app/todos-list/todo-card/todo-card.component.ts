import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TodoInterface} from '../../interfaces/todo-interfaces';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DeleteTodoDialogComponent} from '../delete-todo-dialog/delete-todo-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EditTodoDialogComponent} from '../edit-todo-dialog/edit-todo-dialog.component';
import {TrucantePipe} from '../../pipes/truncate.pipe';
import {ShadowHighlightDirective} from '../../directives/shadow.directive';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-todo-card',
    standalone: true,
    imports: [MatIconModule, MatDialogModule, TrucantePipe, ShadowHighlightDirective, MatTooltipModule, MatButtonModule],
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
    @Input()
    todo!: TodoInterface;

    @Output()
    public deleteTodo: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public editTodo: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();

    readonly dialog: MatDialog = inject(MatDialog);

    public snackBar: MatSnackBar = inject(MatSnackBar);

    openEditDialog(): void {
        const dialogRef = this.dialog.open(EditTodoDialogComponent, {
            width: '350px',
            data: {todo: this.todo},
        });

        dialogRef.afterClosed().subscribe((editResult: any) => {
            if (editResult) {
                this.editTodo.emit(editResult);
                this.snackBar.open('Todo изменен!', 'Ok', {
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
        const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
            data: {todo: this.todo},
        });

        dialogRef.afterClosed().subscribe((deleteResult: boolean | undefined) => {
            if (deleteResult) {
                this.deleteTodo.emit(this.todo.id);
                this.snackBar.open('Todo удален!', 'Ok', {
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
