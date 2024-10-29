import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDOs } from '../../interfaces/todo.interface';
import { SlicePipe } from '@angular/common';



@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [SlicePipe],
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
