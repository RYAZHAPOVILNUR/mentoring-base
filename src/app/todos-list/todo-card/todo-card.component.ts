import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos-interface';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter()

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId)
  }

  readonly tasksText = taskTexts

  readonly tasksAuthor = taskAuthors

  readonly tasksCompleted = taskCompleteds
}

const textTasks = (taskText: string) => {return taskText}

const taskTexts: string = 'ТЕКСТ ЗАДАЧИ'

const vuzov1 = textTasks(taskTexts)

const authorTasks = (taskAuthor: string) => {return taskAuthor}

const taskAuthors: string = 'АВТОР ЗАДАЧИ'

const vuzov2 = authorTasks(taskAuthors)

const completedTasks = (taskCompleted: string) => {return taskCompleted}

const taskCompleteds: string = 'ЗАДАЧА ЗАВЕРШЕНА'

const vuzov3 = completedTasks(taskCompleteds)
