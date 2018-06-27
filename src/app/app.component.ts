import { Component } from '@angular/core';
import { UserFirebaseService } from './user-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: any;
  constructor(public userFirebaseService: UserFirebaseService) {
    const stream = this.userFirebaseService.getUsers();
    stream.valueChanges().subscribe((result) => {
      this.users = result;
      console.log(result);
    });
    console.log(this.users);
  }
  printUser(userId) {
    const stream = this.userFirebaseService.getUserById(userId);
    stream.valueChanges().subscribe((result) => {
      console.log(result);
    });
  }
  removeUser(userId) {
    const promise = this.userFirebaseService.removeUserById(userId);
    promise.then(() => {
      alert('Usuario eliminado con éxito!');
    }).catch((error) => {
      alert('Hubo un problema eliminando al usuario');
      console.log(error);
    });
  }
  addUser() {
    const user = {
      name: 'Prueba Crear',
      status: 'online',
      nick: 'Prueba',
      user_id: Date.now()
    };
    const promise = this.userFirebaseService.createUser(user);
    promise.then(() => {
      alert('Usuario agregado con éxito');
    }).catch((error) => {
      alert('No se pudo agregar el usuario');
      console.log(error);
    });
  }
  editUser() {
    const user = {
      name: 'Prueba Editar',
      status: 'busy',
      nick: 'Prueba Editar',
      user_id: 2
    };
    const promise = this.userFirebaseService.createUser(user);
    promise.then(() => {
      alert('Usuario editado con éxito');
    }).catch((error) => {
      alert('No se pudo edutar el usuario');
      console.log(error);
    });
  }
}
