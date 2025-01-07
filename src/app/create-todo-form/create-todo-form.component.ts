import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'


@Component ({
    selector: 'app-create-todo-form',
    templateUrl: './create-todo-form.component.html',
    styleUrl: './create-todo-form.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule,
              MatButtonModule,
              MatInputModule,
              MatFormFieldModule,
              MatIconModule
            ]
})

export class CreateTodoForm {

    @Output()
    createTodo = new EventEmitter



    public form = new FormGroup({
            title: new FormControl('', [Validators.required]),
            userId: new FormControl('', [Validators.required]),
            completed: new FormControl('', [Validators.required])
    });


    public submitForm(): void {
        this.createTodo.emit(this.form.value)
        this.form.reset()
    }
    
}