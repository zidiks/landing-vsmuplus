import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ngZone: NgZone, private afAuth: AngularFireAuth, private firestore: AngularFirestore , private router: Router) { }

  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>('user');
  public userboolean: boolean = false;
  

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }



  signUp(email:string, password:string){
    this.afAuth.createUserWithEmailAndPassword(email, password)
     .then((userResponse)=>{
       // add the user to the "users" database
       let user = {
        id: userResponse.user.uid,
        username: userResponse.user.email,
        role: "user",
       }
       
       //add the user to the database
       this.firestore.collection("users").add(user)
       .then(user => {
        user.get().then(x => {
          //return the user data
          console.log(x.data());
          this.currentUser = x.data();
          this.setUserStatus(this.currentUser);
          this.router.navigate(["/"]);
        })
       }).catch(err => {
         console.log(err);
       })
       
      
     })
     .catch((err)=>{
        console.log("An error ocurred: ", err);
        alert(err.message);
     })
 
    }

    login(email: string, password: string) {
      
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user)=>{
        this.firestore.collection("users").ref.where("username", "==", user.user.email).onSnapshot(snap =>{
          snap.forEach(userRef => {
            console.log("userRef", userRef.data());
            this.currentUser = userRef.data();
            //setUserStatus
            this.setUserStatus(this.currentUser)
            this.router.navigate(["/admin"]);
          })
        })
       
      }).catch(err => err)
  }

  logOut(){
    this.afAuth.signOut()
    .then(()=>{
      console.log("user signed Out successfully");
      //set current user to null to be logged out
      this.currentUser = null;
      //set the listenener to be null, for the UI to react
      this.setUserStatus(null);
      this.ngZone.run(() => this.router.navigate(["/login"]));

    }).catch((err) => {
      console.log(err);
    })
  }


  userChanges(url){
    this.afAuth.onAuthStateChanged(currentUser => {
      if(currentUser){
        this.firestore.collection("users").ref.where("username", "==", currentUser.email).onSnapshot(snap =>{
          snap.forEach(userRef => {
            this.currentUser = userRef.data();
            //setUserStatus
            this.setUserStatus(this.currentUser);
            console.log(this.userStatus)
            
            if(userRef.data().role !== "admin" && userRef.data().role !== "moderator") {
              console.log('permissions error')
             this.ngZone.run(() => this.router.navigate(["/"]));
            }else{
              console.log('permisssions succes');
              this.userboolean = true;
              if ( this.router.url == '/admin') {
                this.ngZone.run(() => this.router.navigate(['/admin/index'])); 
              } else
             this.ngZone.run(() => this.router.navigate([url])); 
            }
          })
        })
      }else{
        //this is the error you where looking at the video that I wasn't able to fix
        //the function is running on refresh so its checking if the user is logged in or not
        //hence the redirect to the login
        console.log('zaloginis');
        this.ngZone.run(() => this.router.navigate(["/login"]));
      }
    })
  }
}
