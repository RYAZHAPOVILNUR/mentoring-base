import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButtonModule, MatError, MatDialogClose],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>)
  

  public formUser = new FormGroup ({
    name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
    website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
    company: new FormGroup ({
     name: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)])
    }),
  });
  
  submitForm() {
    this.dialogRef.close({...this.formUser.value,  id: this.data.user.id,});
    console.log(this.formUser.value)
  };
}
