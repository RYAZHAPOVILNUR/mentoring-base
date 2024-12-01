import {Component, inject} from '@angular/core';
import {Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-create-todo-dialog',
    standalone: true,
    imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatOption, MatLabel, MatSelectModule, MatDialogClose, MatTooltipModule],
    templateUrl: './create-todo-dialog.component.html',
    styleUrl: './create-todo-dialog.component.scss'
})
export class CreateTodoDialogComponent {

    readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef<CreateTodoDialogComponent>);

    private fb: FormBuilder = inject(FormBuilder);

    public form = this.fb.group({
        userId: ['', [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]],
        title: ['', [Validators.required, Validators.minLength(3)]],
        completed: ['', [Validators.required]],
    });

    submitForm() {
        this.dialogRef.close(this.form.value);
    }

    // private getCompletedValue(): boolean {
    //   const value = this.form.get('completed')?.value!.trim().toLowerCase();
    //   return value === 'yes';
    // }

    // public submitFormTodo(): void {
    //   const formData = { ...this.form.value, completed: this.getCompletedValue() };
    //   this.createTodoForm.emit(formData);
    //   this.form.reset();
    // }
}
