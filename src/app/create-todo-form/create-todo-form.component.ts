import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";



@Component({
   selector: 'app-create-todo-form',
   templateUrl: 'create-todo-form.component.html',
   styleUrl: 'create-todo-form.component.scss',
   standalone: true,
   imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})

export class CreateTodoFormComponent {
    @Output()

    createTodo = new EventEmitter()

    public form = new FormGroup({
        userid: new FormControl(null, [Validators.required,]),
        title: new FormControl(null, [Validators.required]),
        completed: new FormControl(null, [Validators.required])
    })
    public submitForm(): void {
        this.createTodo.emit(this.form.value)
       }

}