import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from "@angular/core";
import {ReactiveFormsModule } from "@angular/forms";
import {MatButton, MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: 'app-delete-user-dialog',
    templateUrl: './delete-todo-dialog.component.html',
    styleUrl: './delete-todo-dialog.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButton,
                  MatInputModule,
                  MatFormFieldModule,
                  MatIconModule,
                  MatButtonModule,
                  ReactiveFormsModule,
                  MatDialogClose,
                  MatDialogActions,
                  MatDialogContent]
})

export class DeleteTodoDialogComponent {


    @Output()
    deleteTodo = new EventEmitter



    readonly data = inject(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);

}