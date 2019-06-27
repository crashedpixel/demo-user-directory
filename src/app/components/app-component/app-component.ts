import { Component, OnInit } from '@angular/core';
import mockUserService from '../../services/user-service/mock.user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app-component.html',
  styleUrls: ['./app-component.less']
})
export class AppComponent implements OnInit {
  title = 'user-directory';
  users = [];
  mainUser: any;

  constructor() {
    this.mainUser = mockUserService.getUserDetails;
  }
  ngOnInit() {
  }
}
