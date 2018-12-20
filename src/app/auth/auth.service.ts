import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (rs) => {
          console.log(rs);
          this.router.navigate(['']);
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  }
  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (rs) => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token) => {
                this.token = token;
                this.router.navigate(['']);
              }
            );
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (token) => {
        this.token = token;
      }
    );
    return this.token;
  }
  signout() {
    firebase.auth().signOut();
    this.token = '';
  }
  isAuthenticate() {
    return this.token !== '';
  }
}
