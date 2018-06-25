import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usersComponent = [];
  constructor(public userService: UserService) {
    this.usersComponent = this.userService.getUsers();
    console.log(this.usersComponent); //arreglo con 2 usuarios
    const newUser = {name: 'Nuevo Usuario', age: 29};
    this.userService.createUser(newUser);
    console.log(this.usersComponent); //arreglo con 3 usuarios
  }

  ngOnInit() {
  }

}
