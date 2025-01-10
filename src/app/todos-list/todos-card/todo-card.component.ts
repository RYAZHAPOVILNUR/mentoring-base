import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output} from "@angular/core";
import { Todo } from "../todos-list.component";
import { MatCardModule, MatCardTitle } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ShortField } from "../../pipes/short-field.pipe";
import { MatDialog } from "@angular/material/dialog";
import { DeleteTodoDialogComponent } from "./delete-todo-dialog/delete-todo-dialog.component";
import { EditTodoDialogComponent } from "./edit-todo-dialog/edit-todo-dialog.component";
import { BoolaenTransform } from "../../pipes/boolean-transform.pipe";

@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
                MatCardModule,
                MatButtonModule,
                MatTooltipModule,
                MatCardTitle,
                ShortField,
                BoolaenTransform,
            ]
})

export class TodoCardComponent {
    
    @Input()
    todo!: Todo;

    @Output()
    deleteTodo = new EventEmitter()

    @Output()
    editTodo = new EventEmitter()

    readonly dialog = inject(MatDialog);


    openDialog(): void {
        const dialogRef = this.dialog.open(EditTodoDialogComponent, {
            data: {todo: this.todo},
        });
        
        dialogRef.afterClosed().subscribe(editResult => {
            console.log('МОДАЛКА ЗАКРЫТА, ЗНАЧЕНИЕ ФОРМЫ -', editResult );
            if (!editResult) return;
            this.editTodo.emit(editResult)
        });
    }


    openDialogDelete(): void {
        const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
            data: {todo: this.todo}
        });
        
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed'); 
            if (!result) return;
            this.deleteTodo.emit(result);
            console.log(result)
        });
    }    

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId)
    }

}