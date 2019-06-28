import { Component, OnInit } from '@angular/core';
import mockUserService from '../../services/user-service/mock.user.service';
import { UserService } from '../../services/user-service/user.service';
import { UserData } from 'src/app/userdata';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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
      this.loadUserDetails(params.get('id'));
    });
  }

  ngOnInit() {
  }

  loadUserDetails(id: string | number) {
    this.userService.getUserDetails(id).subscribe((data) => {
      this.user = data;
    })
  }

  confirmDeleteUser(e) {
    e.preventDefault();

    const res = confirm('Please confirm you want to delete user');
    if (res) {
      this.userService.deleteUser(this.user.id).subscribe((data) => {
        this.router.navigate(['/users']);
      });
    }
  }

  confirmUpdateUser(e: Event) {
    e.preventDefault();

    const res = confirm('Please confirm you want to update user');
    if (res) {
      this.userService.updateUserDetails(this.user).subscribe((data) => {
        this.loadUserDetails(this.user.id);
      })
    }
  }
}
