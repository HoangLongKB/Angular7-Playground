import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email: string = form.value.email;
    const password: string = form.value.password;
    this.authService.signin(email, password);
  }
}
