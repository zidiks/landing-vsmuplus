import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  public loginForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
   
  });

  login(formData: FormData){
    this.AuthService.login(formData["email"], formData["password"]);
  }

  ngOnInit(): void {
  }

}
