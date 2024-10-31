import { Injectable } from '@angular/core';
import { Todo } from './users-list/user-interface';

const storageName = 'aah_todo_list';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)!);
  }

  // get items
  get() {
    return [...this.todoList];
  }

  // add a new item
  post(todo: Todo) {
    this.todoList.push(todo);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

  // update an item
  private findItemIndex(todo: Todo) {
    return this.todoList.indexOf(todo);
  }

  put(todo: Todo, changes: any) {
    Object.assign(this.todoList[this.findItemIndex(todo)], changes);
    return this.update();
  }

  // remove an item
  destroy(id: Todo) {
    this.todoList.splice(this.findItemIndex(id), 1);
    return this.update();
  }
}
