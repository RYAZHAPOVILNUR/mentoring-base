import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';


@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButtonModule, MatError],
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
  company: new FormGroup ({
   name: new FormControl('', [Validators.required, Validators.minLength(2)])
  }),
});

 public OnSubmit(): void {
  this.creatUser.emit(this.formUser.value);
  this.formUser.reset();
 }

 constructor () {
  this.formUser.valueChanges.subscribe((formValue) => console.log(formValue))
 }
}
