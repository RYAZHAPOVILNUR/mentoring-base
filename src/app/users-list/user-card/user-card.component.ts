import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../users-list.component";



@Component({
    selector: 'user-card-root',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [NgFor]
})

export class UserCardComponent {
    @Input()
    userCard!: User;

    @Output()

    deleteUserCard = new EventEmitter()

    onDeleteUser(userCardId: number) {
        this.deleteUserCard.emit(userCardId)
    }
}
