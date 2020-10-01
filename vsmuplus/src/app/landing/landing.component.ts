import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('ideas').valueChanges();
  }

}
