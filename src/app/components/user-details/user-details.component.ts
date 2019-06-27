import { Component, OnInit } from '@angular/core';
import mockUserService from '../../services/user-service/mock.user.service';
import { UserService } from '../../services/user-service/user.service';
import { UserData } from 'src/app/userdata';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
  user: UserData;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    // this.user = mockUserService.getUserDetails;

    this.route.paramMap.subscribe(params => {
      userService.getUserDetails(params.get('id')).subscribe((data) => {
        this.user = data;
      })
    });
  }

  ngOnInit() {
  }

}
