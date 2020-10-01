import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';


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
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
