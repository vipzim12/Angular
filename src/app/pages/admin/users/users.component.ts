import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { users } from './users';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class UsersComponent implements OnInit {
  users: users[];
  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.getAllUsers;
  }
  getAllUsers() {
    this._usersService.getUsers().subscribe((data: any) => {
      this.users = data.result;
    })
  }
}
