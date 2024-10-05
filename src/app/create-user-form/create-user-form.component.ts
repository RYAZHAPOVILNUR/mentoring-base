import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {
  @Output()
  createUserForm = new EventEmitter();

  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Zа-яА-я.]*$")]), // [Validators.required] - означает обязательное поле для заполнения
    email: new FormControl('',[Validators.required, Validators.email]),
    website: new FormControl('', [Validators.required, Validators.minLength(3)]),
    companyName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Zа-яА-я._]*$")]),
  });

  public submitFormUser(): void {
    this.createUserForm.emit(this.form.value); // Отправляем данные юзеров
    this.form.reset(); // Очиищает форму после ее заполнения
  }

  // constructor() {  // Следит что форма постоянно меняется
  //   this.form.valueChanges.subscribe(formValue => console.log(formValue));
  // }
}
