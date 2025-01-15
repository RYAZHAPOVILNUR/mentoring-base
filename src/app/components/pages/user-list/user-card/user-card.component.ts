import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../../../notifications/confirm-delete/confirm-delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DeleteDefisPipe } from '../../../../pipes/deleteDefis';
import { BoxShadowDirective } from '../../../../directives/box-shadow.directive';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-user-card',
  imports: [
    MatButtonModule,
    MatCardModule,
    DeleteDefisPipe,
    BoxShadowDirective,
    MatIcon,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user!: User;

  @Output() deleteUser = new EventEmitter<number>();
  @Output() editUser = new EventEmitter();

  private readonly dialog: MatDialog = inject(MatDialog);

  onDeleteUser(id: number) {
    this.dialog
      .open(ConfirmDeleteComponent)
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.deleteUser.emit(id);
        }
      });
  }

  onEditUser() {
    this.editUser.emit();
  }
}
