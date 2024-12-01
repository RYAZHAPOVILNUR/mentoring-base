import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";

@Component({
    standalone: true,
    templateUrl: "./edit-user-dialog.component.html",
    imports: [ReactiveFormsModule, MatDialogClose, NgIf]
})

export class EditUserDialog {

    readonly data = inject(MAT_DIALOG_DATA)
    readonly dialogRef = inject(MatDialogRef)

    public form = new FormGroup ({
        name: new FormControl(this.data.user.name, [Validators.required]),
        email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
        website: new FormControl(this.data.user.wedsite, [Validators.required]),
        companyName:  new FormControl(this.data.user.company.name, [Validators.required])
       })
    get userWithUpdatedFields() {
        return {
            ...this.form.value,
            id: this.data.user.id,
        }
    }
}