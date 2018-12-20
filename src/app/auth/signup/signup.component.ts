import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email: string = form.value.email;
    const password: string = form.value.password;
    this.authService.signup(email, password);
  }
}
