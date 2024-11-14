import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IUser } from "../../interfaces/user.interface";



@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true
})

export class UserCardComponent<T extends IUser> {
    @Input() public user!: T
    
    @Output() public deleteUser: EventEmitter<number> = new EventEmitter<number>()
    
    public onDeleteUser(userId: number): void {
        this.deleteUser.emit(userId)
    }
}