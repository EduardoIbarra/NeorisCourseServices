import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pos: number;
  usersComponent = [];
  constructor(public activatedRoute: ActivatedRoute, public userService: UserService) {
    this.usersComponent = userService.getUsers();
    console.log(this.usersComponent);
    this.pos = this.activatedRoute.snapshot.params['id'];
    console.log(this.pos);
  }

  ngOnInit() {
  }
}
