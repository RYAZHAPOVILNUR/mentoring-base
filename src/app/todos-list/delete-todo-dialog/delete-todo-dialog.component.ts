import { Component, inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";


@Component ({
    selector: 'app-delete-todo-dialog',
    standalone: true,
    templateUrl: './delete-todo-dialog.component.html',
    styleUrl: './delete-todo-dialog.component.scss',
    imports: [MatDialogModule, MatButton],
})
export class DeleteTodoDialogComponent {
    public readonly data = inject(MAT_DIALOG_DATA)

}