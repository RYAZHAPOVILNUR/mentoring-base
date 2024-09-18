import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

@Input()
user: any

@Output()
deleteUser = new EventEmitter()

onDeleteUser (userID: number) {
  this.deleteUser.emit(userID)
} 

}
