import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddpostModule } from './dashboard/addpost/addpost.module';
import { InviteModule } from './dashboard/invite/invite.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDZuwWfpWoWbh2JdHaHVHqlASZi5ERaIx8",
      authDomain: "vsmuplusapp.firebaseapp.com",
      databaseURL: "https://vsmuplusapp.firebaseio.com",
      projectId: "vsmuplusapp",
      storageBucket: "vsmuplusapp.appspot.com",
      messagingSenderId: "482258719582",
      appId: "1:482258719582:web:8a47a8984f32e1fcc3b5cf"
    }),
    AngularFirestoreModule,
    AddpostModule,
    InviteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
