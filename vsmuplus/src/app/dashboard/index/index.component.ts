import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public usersLength;
  public postsLength;
  public videoLength;

  constructor(private afs: AngularFirestore) {
    this.afs.collection('users').valueChanges().subscribe(m => {
      this.usersLength = m.length;
    })
    this.afs.collection('ideas').valueChanges().subscribe(m => {
      this.postsLength = m.length;
    })
    this.afs.collection('ideas', ref => ref.where('category', '==', 'video')).valueChanges().subscribe(m => {
      this.videoLength = m.length;
    })
  }

  ngOnInit(): void {
  }

}
