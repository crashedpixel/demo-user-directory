import { Component, OnInit } from '@angular/core';
import mockUserService from '../../services/user-service/mock.user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  users = [];

  constructor() {
    this.users = mockUserService.searchQuery;

  }

  ngOnInit() {
  }

}
