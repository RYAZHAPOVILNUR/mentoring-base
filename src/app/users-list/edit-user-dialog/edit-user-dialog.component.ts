import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatError, MatFormFieldModule, MatLabel, } from '@angular/material/form-field';
import { UserInterface } from '../../interfaces/user-interfaces';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule, MatLabel, MatIcon, MatError, MatInputModule, MatDialogClose, MatDialogActions, MatTooltipModule],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
})
export class EditUserDialogComponent {
  
  readonly data: {user: UserInterface} = inject<{ user: UserInterface }>(MAT_DIALOG_DATA);

  readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef<EditUserDialogComponent>);
  
  submitForm() {
    this.dialogRef.close({...this.form.value, id: this.data.user.id});
  };
  
  public form = new FormGroup({
    name: new FormControl(this.data.user.name, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(this.data.user.email, [
      Validators.required,
      Validators.email,
      Validators.minLength(3),
    ]),
    website: new FormControl(this.data.user.website, [
      Validators.required,
      Validators.minLength(3),
    ]),
    company: new FormGroup({
      name: new FormControl(this.data.user.company.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
    })
  });
}
