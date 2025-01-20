import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { ITodo } from "../../../interfaces/todos.interface";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from "@angular/material/select";


@Component({
    selector: 'app-edit-todo-dialog',
    templateUrl: './edit-todo-dialog.component.html',
    styleUrl: './edit-todo-dialog.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatInputModule,
              MatFormFieldModule,
              MatIconModule,
              MatButtonModule,
              ReactiveFormsModule,
              MatDialogClose,
              MatSlideToggleModule,
              MatSelectModule
            ]
})

export class EditTodoDialogComponent {
    
    @Output()
    createTodo = new EventEmitter
    

    readonly data = inject<{todo: ITodo}>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);


    public form = new FormGroup({
            title: new FormControl(this.data.todo.title, [Validators.required, Validators.minLength(2)]),
            userId: new FormControl(this.data.todo.userId, [Validators.required]),
            completed: new FormControl(this.data.todo.completed, [Validators.required])
        });



    public submitForm(): void {
        this.dialogRef.close(this.form.value)
    }

    get todoWithUpdatedFields () {
        return {
            ...this.form.value,
            id: this.data.todo.id,
        };
    }

}