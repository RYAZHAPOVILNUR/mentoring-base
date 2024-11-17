import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton
  ],
  templateUrl: 'edit-user-dialog.component.html'
})

export class EditUserDialogComponent {
  public data = inject(MAT_DIALOG_DATA)
  readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);

  public form = new FormGroup({
    name: new FormControl(this.data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    company: new FormControl(this.data.company.name, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  })

  public onSubmit() {
    this.dialogRef.close({...this.form.value, company: {name: this.form.value.company}, id: this.data.id});
  }
}
