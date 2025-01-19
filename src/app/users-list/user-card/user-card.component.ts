import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../users.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class UserCardComponent {
  @Input()
  user!: User;
  
  @Output()
  deleteUser = new EventEmitter();
  
  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

}
