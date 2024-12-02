import {Component, inject} from '@angular/core';
import {TodoInterface} from '../../interfaces/todo-interfaces';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-delete-todo-dialog',
    standalone: true,
    imports: [MatDialogModule, MatIconModule, MatTooltipModule, MatButton],
    templateUrl: './delete-todo-dialog.component.html',
    styleUrl: './delete-todo-dialog.component.scss'
})
export class DeleteTodoDialogComponent {
    public readonly data: { todo: TodoInterface } = inject<{ todo: TodoInterface }>(MAT_DIALOG_DATA);
}
