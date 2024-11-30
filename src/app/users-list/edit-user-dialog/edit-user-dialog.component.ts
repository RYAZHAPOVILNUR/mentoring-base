import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.component.html',
    styleUrl: './edit-user-dialog.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        NgIf
    ]
})

export class EditUserDialogComponent {
    constructor(private snackBar: MatSnackBar) { }

    readonly data = inject(MAT_DIALOG_DATA)
    readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>)

    public form = new FormGroup({
        name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
        email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
        website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
        company: new FormGroup({
            name: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)]),
        })
    })

    userWithUpdatedFields() {
        return {
            ...this.form.value,
            id: this.data.user.id
        }
    }

    public submitForm() {
        this.dialogRef.close({ ...this.form.value, id: this.data.user.id })
    }
}