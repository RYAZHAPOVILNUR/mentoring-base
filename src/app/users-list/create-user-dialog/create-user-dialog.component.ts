import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatError, MatFormField, MatLabel, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-create-user-dialog',
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
    NgStyle
  ],
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateUserDialogComponent>)

  @Output()
  public createUser = new EventEmitter()

  public hovered = false;

  public form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    company: new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)])
    }),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.pattern(/^\d+( \d+)?$/)])
  });

  public submitForm() {
    this.dialogRef.close(this.form.value)
  }
}
