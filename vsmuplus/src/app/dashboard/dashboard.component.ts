import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  public userStatus = this.AuthService.userStatus;

  logout() {
    this.AuthService.logOut();
  }

  ngOnInit(): void {
    this.AuthService.userChanges();

    this.AuthService.userStatusChanges.subscribe(x => this.userStatus = x);
    console.log(this.userStatus);
  }

}
