import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 
import { NgIf } from "@angular/common";
import { User } from "../users-list.component";


@Component ({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDialogClose],

})
export class EditUserDialogComponent {
    readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);
    // readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);

    form = new FormGroup ({
        name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]), //обязательно к заполнению
        email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
        website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
        companyName: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)]),
    })

    get userWithUpdatedFields(){
        return {
            ...this.form.value, id: this.data.user.id
        }
    }

    // submitForm() {
    //     this.dialogRef.close(this.form.value)
    // }
}