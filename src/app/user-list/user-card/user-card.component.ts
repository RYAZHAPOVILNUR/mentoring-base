import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../users-api.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User;

  @Output() deleteUser = new EventEmitter<number>();

  onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }
}
