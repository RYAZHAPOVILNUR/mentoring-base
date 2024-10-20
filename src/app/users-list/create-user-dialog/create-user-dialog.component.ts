import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 
import { NgIf } from "@angular/common";
import { User } from "../users-list.component";


@Component ({
    selector: 'app-create-user-dialog',
    templateUrl: './create-user-dialog.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDialogClose],

})
export class CreateUserDialogComponent {
    readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);
    // readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);
    @Output()
    createModalUser = new EventEmitter();

    public form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]), //обязательно к заполнению
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })

    public submitForm(): void {
        this.createModalUser.emit(this.form.value);
        // this.form.reset();
    }

    // get userWithUpdatedFields(){
    //     return {
    //         ...this.form.value, id: this.data.user.id
    //     }
    // }
}