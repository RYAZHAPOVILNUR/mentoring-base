import { Component, EventEmitter, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { completedValidator } from './create-todo-form-validator.component';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateTodoFormComponent implements OnInit {
  @Output()
  createTodo = new EventEmitter();
  
  public formTodo = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userId: new FormControl('', [Validators.required]),
    completed: new FormControl('', [Validators.required, completedValidator()])
  })
  
  private getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да')
      return true;
    else return false;
  }
  
  public submitForm(): void {
    this.createTodo.emit({...this.formTodo.value, completed: this.getCompletedValue()})
    this.formTodo.reset()
  }
  
  ngOnInit(): void {
    
  }
}
