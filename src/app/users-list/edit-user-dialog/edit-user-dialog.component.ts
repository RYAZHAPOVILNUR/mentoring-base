import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,  MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../interfaces/user-interfaces';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  templateUrl: 'edit-user-dialog.component.html',
  imports: [ReactiveFormsModule, NgIf, MatButtonModule,
   MatInputModule,
   MatFormFieldModule, MatDialogClose, ]
})
export class EditUserDialogComponent {
  readonly data = inject<{user: User}>(MAT_DIALOG_DATA);
  

  form = new FormGroup({
   name: new FormControl(this.data.user.name, [
    Validators.required,
    Validators.minLength(2),
   ]),
   email: new FormControl(this.data.user.email, [
    Validators.required,
    Validators.minLength(3), 
   ]),
   website: new FormControl(this.data.user.website, [
    Validators.required,
    Validators.minLength(3)]),
   companyName: new FormControl(this.data.user.company.name ,[
    Validators.required,
    Validators.minLength(2),
   ]),
  });

  get userWithUpdatedFields() {
   return {
    ...this.form.value,
    id: this.data.user.id,
   };
  }
 
}
