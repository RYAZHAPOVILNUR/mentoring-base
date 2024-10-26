import {
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import { User } from '../../user-interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { deleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { EditPhonePipe } from "../../pipes/edit-phone.pipe";
import { ShadowDirective } from '../../directives/shadow.directive';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [MatCardModule, MatIconModule, EditPhonePipe, ShadowDirective],
})
export class UserCardComponent {
    @Input()
    user!: User;

    @Output()
    deleteUser = new EventEmitter();

    @Output()
    editUser = new EventEmitter();

    readonly dialog = inject(MatDialog);
    readonly snackBar = inject(MatSnackBar)

    openDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
            data: { user: this.user },
        });

        dialogRef.afterClosed().subscribe((editResult) => {
            if (editResult) {
                this.editUser.emit(editResult);
                this.snackBar.open('Пользователь успешно изменен', 'ok', {duration: 3000,});
            }
        });
    }

    openDeleteDialog(): void {
        const dialogRef = this.dialog.open(deleteUserDialogComponent, {
            data: { user: this.user },
        });

        dialogRef.afterClosed().subscribe((deleteResult) => {
            if (deleteResult) {
                this.deleteUser.emit(this.user.id);
                this.snackBar.open('Пользователь удален', 'ok', {duration: 3000,});
            }
        });
    }
}
