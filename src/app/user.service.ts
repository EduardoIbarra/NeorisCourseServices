import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {name: 'Eduardo', age: 28},
    {name: 'Víctor', age: 26}
  ];
  constructor() { }
  getUsers() {
    return this.users;
  }
  createUser(user) {
    this.users.push(user);
  }
}
