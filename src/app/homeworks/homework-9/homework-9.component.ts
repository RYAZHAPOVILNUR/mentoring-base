import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserService } from '../../user-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-homework9',
  standalone: true,
  imports: [NgClass],
  templateUrl: './homework-9.component.html',
  styleUrl: './homework-9.component.scss'
})
export class Homework9Component {

  @Output() getUser = new EventEmitter<number>();
  @Output() getCity = new EventEmitter<string>();
  @Output() getFiveUsers = new EventEmitter<number>();
  @Output() getReversUsers = new EventEmitter<any>();
  @Output() getLengthUsers = new EventEmitter<any>();
  @Output() purseLowerUsername = new EventEmitter<any>();
  @Output() getComUsers = new EventEmitter<string>();
  @Output() getLengthUsername = new EventEmitter<number>();

  isActive: string = 'isActive';

  constructor (private userService: UserService) {  }

  doPurse() {
    this.userService.doPurse();
  }
  
  getAllEmails() {
    this.userService.getAllEmails();
  }

  getNineUser(n: number) {
    this.getUser.emit(n); 
  }

  getUsersCity(city: string) {
    this.getCity.emit(city);
  }

  getFirstFiveUsers(n: number) {
    this.getFiveUsers.emit(n);
  }

  getReversIdUsers() {
    this.getReversUsers.emit();
  }

  getLengthAllUsers() {
    this.getLengthUsers.emit();
  }

  purseLowerAllUsername() {
    this.purseLowerUsername.emit();
  }

  getComAllUsers(domen: string) {
    this.getComUsers.emit(domen);
  }

  getLengthAllUsername(length: number) {
    this.getLengthUsername.emit(length);
  }
}
