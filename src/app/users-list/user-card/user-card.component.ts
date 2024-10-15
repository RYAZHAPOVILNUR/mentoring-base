import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      zipcode: string;
      city: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      bs: string;
      catchPhrase: string;
      name: string;
    };
  }

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card-component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
})

export class UserCardComponent {
    @Input()
    user!: User

    @Output()
    deleteUser = new EventEmitter();

    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId);
    }
}
