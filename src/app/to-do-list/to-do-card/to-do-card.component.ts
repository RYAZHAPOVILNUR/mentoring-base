import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDOs } from '../../interfaces/todo.interface';


export interface ToDoCard {}

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.scss'
})
export class ToDoCardComponent {

@Input()
item!: ToDOs

@Output()
deleteToDo = new EventEmitter()

onDeleteToDo(itemID: number) {
  this.deleteToDo.emit(itemID) 
}

}
