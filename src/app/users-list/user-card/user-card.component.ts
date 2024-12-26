import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({
    selector: 'user-card-root',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [NgFor]
})

export class UserCardComponent {
    @Input()

    userCard: any

    @Output()

    deleteUserCard = new EventEmitter()

    onDeleteUser(userCardId: number) {
        this.deleteUserCard.emit(userCardId)
    }
}
