import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { User } from "../user-interface";


@Component({
    selector:'app-edit-user-dialog',
    templateUrl:'./edit-user-dialog.component.html', 
    styleUrl:'./edit-user-dialog.component.scss', 
    imports: [ReactiveFormsModule, NgIf, MatDialogClose], 
    standalone: true 
})
export class EditUserDialogComponent {
    readonly data = inject(MAT_DIALOG_DATA);

    public form = new FormGroup({
        name: new FormControl(this.data.name, [Validators.required, Validators.minLength(2)]), 
        email: new FormControl(this.data.email, [Validators.required, Validators.email]), 
        website: new FormControl(this.data.website, [Validators.required, Validators.minLength(3)]), 
        companyName: new FormControl(this.data.companyName.name, [Validators.required, Validators.minLength(2)]), 
    }); 

    get userWithUpdatedFields() {
        return {
            ...this.form.value, 
            id: this.data.user.id, 
        }; 
    }
}