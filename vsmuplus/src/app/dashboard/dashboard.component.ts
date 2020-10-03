import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userStatus;
  public showStatus;

  constructor(private AuthService: AuthService) { 
    this.AuthService.userChanges();
    console.log(this.AuthService.currentUser)
    this.AuthService.userStatusChanges.subscribe(x => {
      this.userStatus = x;
      //this.showStatus = true;
    });
  }

  

  logout() {
    this.AuthService.logOut();
  }

  ngOnInit(): void {
  }

}
