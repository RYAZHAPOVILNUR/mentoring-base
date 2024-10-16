import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MyErrorStateMatcher } from '../utils/error-estate-matcher';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {
  // @Output() это декоратор, который помечает свойство компонента как исходящее событие
  // new EventEmitter() это класс, который используется для создания и отправки событий
  // и здесь createUserForm передали в user-list.component.html
  @Output()
  createUserForm = new EventEmitter();

  // подключаем к html переменную form
  // класс FormGroup обеденяет все FormControl так как FormControl это элемент класса FormGroup
  public form = new FormGroup({
    // каждую переменную класс FormControl будем передавать в файле html в тег input по названиям
    // [Validators.required] поле обязательно для заполнения
    // [Validators.email] поле ожидает обязательное заполнение c @
    // [Validators.minLength(5)] поле ожидает минимум 5 символов
    // Validators.pattern("^[a-zA-Zа-яА-я.]*$") ожидает только латиницу и русский алфавит в верхнем и нижнем регистре от A до Z и от А до Я
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(3),
    ]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    company: new FormGroup({
      name:  new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    })
  });
  
  matcher = new MyErrorStateMatcher();

  public submitForm(): void {
    // emit() используется для генерации или отправки события от дочернего компонента к родительскому.
    // Он вызывается на объекте EventEmitter, который был создан с помощью декоратора @Output().
    this.createUserForm.emit(this.form.value);
    // reset очишает форму после заполнения
    this.form.reset();
  }
}
