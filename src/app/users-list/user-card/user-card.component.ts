import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserInterface } from "../../interfaces/user-interfaces";
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [MatIconModule]
})
export class UserCardComponent {
    // @Input() user_input: any - это входное свойство для получения данных
    @Input()
    user!: UserInterface;

    // @Output() — декоратор, используемый для создания событий
    @Output()
    // EventEmitter — это класс Angular, он же обработчик события который создает событие
    deleteUser = new EventEmitter(); // deleteUser_card используем в файле html и в файле html закидываем в круглые скобки(deleteUser_card)="здесь он будет вызывать другую переменную"

    // onDeleteUser используем в файле html user-card.component.html
    onDeleteUser(userId: number) {
        // emit() выбрасывает и запускает событие и передаёт данные через userId родительскому компоненту.
        this.deleteUser.emit(userId);
    }
}