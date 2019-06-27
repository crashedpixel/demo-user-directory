import { Component, OnInit } from '@angular/core';
import mockUserService from '../../services/user-service/mock.user.service';
import { UserData } from 'src/app/userdata';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
  user: UserData;

  constructor() {
    this.user = mockUserService.getUserDetails;
  }

  ngOnInit() {
  }

}
