import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  config = {
    apiKey: 'AIzaSyCGPUGo4exY9q1ue6zNyJ_JP38XBDQAM58',
    authDomain: 'recipebook-9244e.firebaseapp.com',
  };
  ngOnInit() {
    firebase.initializeApp(this.config);
  }
}
