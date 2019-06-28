import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  users = [];

  constructor(private userService: UserService,
    private router: Router) {

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects.split('search=');
          let query: string = '';

          if (url.length > 1) {
            query = url[1];
          }

          userService.searchByQuery(query).subscribe((data) => {
            this.users = data;
          });
        }
      });

      // userService.searchByQuery().subscribe((data) => {
      //   this.users = data;
      // });
  }

  ngOnInit() {
  }

}
