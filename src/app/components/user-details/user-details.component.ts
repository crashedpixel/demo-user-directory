import { Component, OnInit, Input } from '@angular/core';
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
  userDetailsForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    // this.user = mockUserService.getUserDetails;

    this.route.paramMap.subscribe(params => {
      this.userService.getUserDetails(params.get('id')).subscribe((data) => {
        this.user = data;
        this.userDetailsForm.setValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email
        });
      })
    });
  }

  ngOnInit() {
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
      const update = {
        ...this.user,
        firstName: this.userDetailsForm.get('firstName').value,
        lastName: this.userDetailsForm.get('lastName').value,
        email: this.userDetailsForm.get('email').value
      }
      this.userService.updateUserDetails(update).subscribe((data) => {
        alert('updated');
      })
    }
  }
}
