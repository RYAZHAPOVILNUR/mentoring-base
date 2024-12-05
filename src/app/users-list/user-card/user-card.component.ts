import {Component, EventEmitter, Input, Output} from "@angular/core";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true
})

export class UserCardComponent {
  @Input()
  user: User | undefined;

  @Output()
  deleteUser: EventEmitter<number> = new EventEmitter();

  onDeleteUser (userId: number) {
    this.deleteUser.emit(userId);
  }
}
