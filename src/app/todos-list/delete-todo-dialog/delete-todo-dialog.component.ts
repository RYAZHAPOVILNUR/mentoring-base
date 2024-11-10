import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogActions, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { Todo } from "../todos-list.component";


@Component ({
    selector: 'app-delete-todo-dialog',
    templateUrl: './delete-todo-dialog.component.html',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatDialogClose, MatDialogActions,],

})
export class DeleteTodoDialogComponent {
    readonly data = inject(MAT_DIALOG_DATA); // 3 действие - в модалку передаем данные
    readonly dialogRef = inject(MatDialogRef<DeleteTodoDialogComponent>);

    // constructor(){
    //     console.log(this.data)
    // }
}