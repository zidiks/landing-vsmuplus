import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  public isAdmin: boolean = false;
  public userStatus;

  constructor(private AuthService: AuthService) {
    this.AuthService.userStatusChanges.subscribe(x => {
      this.userStatus = x;
      this.isAdmin = this.userStatus.role == 'admin' ? true : false;
    } )
  }

  ngOnInit(): void {
  }

}
