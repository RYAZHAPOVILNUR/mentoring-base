import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../users-list.interface';
import { CustomUpperCasePipe } from '../../pipes/upper-case.pipe';
import { PhonePipe } from '../../pipes/phone.pipe';
import { RedDirectiv } from '../../directiv/red.directiv';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-user-list-card',
  standalone: true,
  imports: [CustomUpperCasePipe, PhonePipe, RedDirectiv, MatButtonModule],
  templateUrl: './user-list-card.component.html',
  styleUrl: './user-list-card.component.scss'
})
export class UserListCardComponent {
  @Input()
  user!: User;
  
  @Output()
  editUser = new EventEmitter()

  onEditUser(user: User) {
    this.editUser.emit(user); 
  }
  
  @Output()
  deleteUser = new EventEmitter()

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }
}
