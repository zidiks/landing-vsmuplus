import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { NavigationComponent } from "./navigation/navigation.component";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userStatus;
  public showStatus: boolean = false;
  public isAdmin: boolean = false;

  constructor(private AuthService: AuthService, private router: Router, private ngZone: NgZone) { 
    this.AuthService.userChanges(this.router.url);
    this.AuthService.userStatusChanges.subscribe(x => {
      this.userStatus = x;
      switch (this.userStatus.role) {
        case 'admin':
          this.showStatus = true;
          this.isAdmin = true;
          break;
        case 'moderator': 
          this.showStatus = true;
          break;
        default:
          this.showStatus = false;
          break;
      }
    });

  }

  

  logout() {
    this.AuthService.logOut();
  }

  ngOnInit(): void {
  }

}
