import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../interfaces/user.interface";
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

export class EditUserDialogComponent   {

  data = inject(MAT_DIALOG_DATA)
  readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);


  form = new FormGroup({
    name: new FormControl(this.data.name),
    email: new FormControl(this.data.email),
    company: new FormControl(this.data.company.name),
  })

  onSubmit() {
    this.dialogRef.close({...this.form.value, company: {name: this.form.value.company}, id: this.data.id});
  }

}
