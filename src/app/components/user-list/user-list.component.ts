import { Component, OnInit } from '@angular/core';
import mockUserService from '../../services/user-service/mock.user.service';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) {
    // this.users = mockUserService.searchQuery;
    userService.searchByQuery().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit() {
  }

}
