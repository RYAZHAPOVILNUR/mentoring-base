import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, MatInput, MatInputModule, MatButtonModule ],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent {

@Output()

createUser = new EventEmitter()

public form = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  website: new FormControl('', [Validators.required, Validators.minLength(3)]),
  companyName: new FormControl('', [Validators.required, Validators.minLength(2)])
})
  public submitUserForm(): void {
    this.createUser.emit(this.form.value)
    this.form.reset()
    
  }
}
