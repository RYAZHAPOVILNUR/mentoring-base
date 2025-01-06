import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../users-api.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user!: User;

  @Output() deleteUser = new EventEmitter<number>();

  constructor(private cdr: ChangeDetectorRef) {}

  onDeleteUser(id: number) {
    this.deleteUser.emit(id);
    this.cdr.markForCheck();
  }
}
