import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton
  ],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent {
  readonly dialogRef = inject(MatDialogRef<CreateUserFormComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
    email: new FormControl('', [Validators.email]),
    company: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
  })


  onNoClick(): void {
    this.dialogRef.close({...this.form.value, company: {name: this.form.value.company}, id: new Date().getTime()});
  }
}
