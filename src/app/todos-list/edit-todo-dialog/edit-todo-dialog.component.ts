import {Component, inject} from '@angular/core';
import {TodoInterface} from '../../interfaces/todo-interfaces';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-edit-todo-dialog',
    standalone: true,
    imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatOption, MatLabel, MatSelectModule, MatDialogClose, MatTooltipModule],
    templateUrl: './edit-todo-dialog.component.html',
    styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent {

    readonly data: { todo: TodoInterface } = inject<{ todo: TodoInterface }>(MAT_DIALOG_DATA);

    readonly dialogRef: MatDialogRef<TodoInterface> = inject(MatDialogRef<EditTodoDialogComponent>);

    submitForm() {
        this.dialogRef.close({...this.form.value, id: this.data.todo.id})
    };

    public form = new FormGroup({
        id: new FormControl(this.data.todo.id),
        userId: new FormControl(this.data.todo.userId, [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
        title: new FormControl(this.data.todo.title, [Validators.required, Validators.minLength(3)]),
        completed: new FormControl(this.data.todo.completed, [Validators.required]),
    });
}
