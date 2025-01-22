import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button"
 

@Component({
    selector: 'app-create-todo-form', 
    templateUrl: './create-todo-form.html', 
    styleUrl: './create-todo-form.scss', 
    standalone: true, 
    imports: [ReactiveFormsModule, MatButtonModule]
})

export class CreateTodoFormComponent {
    @Output()
    createTodo = new EventEmitter() 

    public form = new FormGroup({
        userId: new FormControl('', [Validators.required, Validators.minLength(1)]),
        title: new FormControl('', [Validators.required, Validators.minLength(2)]), 
        completed: new FormControl()
    }); 

    public submitForm(): void {
        this.createTodo.emit(this.form.value); 
    }
}



