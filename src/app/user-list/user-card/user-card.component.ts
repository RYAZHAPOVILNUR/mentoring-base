import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../../confirm-delete/confirm-delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DeleteDefisPipe } from '../../pipes/deleteDefis';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, DeleteDefisPipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user!: User;

  @Output() deleteUser = new EventEmitter<number>();

  constructor(private dialog: MatDialog) {}

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
}
