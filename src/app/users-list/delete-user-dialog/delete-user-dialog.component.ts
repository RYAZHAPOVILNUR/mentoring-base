import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogActions, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { User } from "../users-list.component";
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";


@Component ({
    selector: 'app-delete-user-dialog',
    templateUrl: './delete-user-dialog.component.html',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatDialogClose, MatDialogActions,],

})
export class DeleteUserDialogComponent {
    readonly data = inject(MAT_DIALOG_DATA); // 3 действие - в модалку передаем данные
    // readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<DeleteUserDialogComponent>);

    constructor(){
        console.log(this.data)
    }

    submitFormDelete() {
        this.dialogRef.close(this.data.user.id)
        return this.data.user.id;
    }

    // get userWithFields(){
    //     return {
            // ...this.form.value, id: this.data.user.id
    //         this.dialogRef.close(this.form.value)
    //     }
    // }

    // get userWithoutUpdatedFields(){
    //     return {
    //         ...this.form.value
    //     }
    // }

    // submitForm() {
        // this.dialogRef.close(this.form.value)
    // } // просто закрываем без изменений
}