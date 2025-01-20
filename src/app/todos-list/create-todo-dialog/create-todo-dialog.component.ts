import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { TodosListComponent } from "../todos-list.component";
import { ITodo } from "../../interfaces/todos.interface";
import { MatIcon } from "@angular/material/icon";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';



@Component({
    selector: 'app-create-todo-dialog',
    templateUrl: './create-todo-dialog.component.html',
    styleUrl: './create-todo-dialog.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
            TodosListComponent,
            MatIcon, 
            MatButtonModule, 
            MatDialogClose,
            MatFormField,
            MatInputModule,
            ReactiveFormsModule,
            MatSelectModule
        ]
})

export class CreateTodoDialogComponent {
    readonly data = inject<{todo: ITodo}>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);



    public form = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(2)]),
        userId: new FormControl('', [Validators.required]),
        completed: new FormControl(''),
    });

}