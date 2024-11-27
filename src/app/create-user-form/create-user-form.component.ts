import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent {
 @Output()
 creatUser = new EventEmitter();

 public formUser = new FormGroup ({
  name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  website: new FormControl('', [Validators.required, Validators.minLength(3)]),
  companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
 });

 public submitForm(): void {
  this.creatUser.emit(this.formUser.value);
  this.formUser.reset();
 }

 constructor () {
  this.formUser.valueChanges.subscribe((formValue) => console.log(formValue))
 }
}
