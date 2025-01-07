import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserFormComponent {
  @Output() createUser = new EventEmitter();

  public form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    website: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
  });

  public submitForm(): void {
    this.createUser.emit(this.form.value);
    this.form.reset();
  }

  constructor() { 
    this.form.valueChanges.subscribe((formValue) => console.log(formValue));
    console.log(this.form.get('name')?.errors);
  }
}
