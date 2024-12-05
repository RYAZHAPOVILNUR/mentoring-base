import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  User } from '../users-list/users-list.interface';


@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButtonModule, MatError],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent {
 readonly data =inject<{ user: User }>(MAT_DIALOG_DATA);
 readonly dialogRef = inject(MatDialogRef<CreateUserFormComponent>)

 constructor() {
  this.formUser.valueChanges.subscribe((formValue) =>
    console.log('Form Value:', formValue)
  );
 }

 @Output()
 creatUser = new EventEmitter();

 public formUser = new FormGroup ({
  name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  website: new FormControl('', [Validators.required, Validators.minLength(3)]),
  company: new FormGroup ({
   name: new FormControl('', [Validators.required, Validators.minLength(2)])
  }),
  phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
 });

 public onSubmit() {
    this.dialogRef.close(this.formUser.value); 
 }
}