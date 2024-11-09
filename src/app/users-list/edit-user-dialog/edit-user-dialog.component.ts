import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatError, MatFormField, MatLabel, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { NgStyle } from "@angular/common";
import { CreateUser, User } from "../users-list.component";

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    NgStyle,
    MatDialogClose
  ],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent {
  readonly data = inject<{user: User}>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>)

  public hovered = false;

  public form = new FormGroup({
    name: new FormControl( this.data.user.name, [
      Validators.required,
      Validators.minLength(2)]),
    email: new FormControl( this.data.user.email, [
      Validators.required,
      Validators.email]),
    website: new FormControl(this.data.user.website, [
      Validators.required,
      Validators.minLength(3)]),
    company: new FormGroup({
      name: new FormControl(this.data.user.company.name, [
        Validators.required,
        Validators.minLength(2)])
    })
  });

  // get userWithUpdatedFields(){
  //   return {
  //     ...this.form.value,
  //     id: this.data.user.id,
  //   }
  // }

  submitForm() {
    this.dialogRef.close({...this.form.value, id: this.data.user.id})
  }
}
