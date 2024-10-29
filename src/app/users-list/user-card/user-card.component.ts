import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../interfaces/user.interface';
import { CreateEditUserDialogComponent } from '../create-edit-user-dialog/create-edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../../delete-user-dialog/delete-user-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PhonePipe } from "../../pipes/phone.pipe";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [PhonePipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

}
