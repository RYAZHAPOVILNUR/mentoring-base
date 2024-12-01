import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";

@Component ({
selector: 'app-create-user-form' ,
templateUrl: 'create-user-form.component.html',
styleUrl: 'create-user-form.component.scss',
standalone: true,
imports: [ReactiveFormsModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class CreateUserFormComponent {

    @Output()

    createUser = new EventEmitter()
    readonly data = inject(MAT_DIALOG_DATA)
    readonly dialogRef = inject(MatDialogRef)


   public form = new FormGroup ({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    website: new FormControl(null, [Validators.required]),
    companyName:  new FormControl(null, [Validators.required])
   })
   get userWithUpdatedFields() {
    return {
        ...this.form.value,
        id: this.data.user.id,
    }
}

   public submitForm(): void {
    this.createUser.emit(this.form.value)
   }
}