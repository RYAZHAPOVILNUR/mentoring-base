import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Todo } from '../todos-list/todos-list.interface';
import { TodosService } from '../todos.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss'
})
export class CreateTodosFormComponent {
  @Output()
  createTodos = new EventEmitter<Todo>();

  public formTodos = new FormGroup ({
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),})

  todo: Todo ={
    id: 0,
    title: '',
    userId: 0,
    completed: false,
  };

  constructor (private todosService: TodosService) {}

  onSumbit() {
    if(!this.todo.title || this.todo.userId === undefined || this.todo.completed === undefined) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }
    this.todo.id =new Date().getTime();
    this.todosService.createTodos(this.todo);
  }
}

