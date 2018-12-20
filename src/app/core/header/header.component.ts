import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StoredServerService } from '../../shared/stored-server.service';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private storedServerService: StoredServerService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  // isAuthen = false;
  ngOnInit() {
    // this.isAuthen = this.authService.isAuthenticate();
  }

  isAuthenticate() {
    return this.authService.isAuthenticate();
  }

  onSaveData() {
    this.storedServerService.updateData()
        .subscribe(
          (rs) => {
            console.log(rs);
          }
        );
    this.router.navigate(['']);
  }
  onFetcheData() {
    this.storedServerService.getData();
    this.router.navigate(['']);
  }
  onLogout() {
    this.authService.signout();
    this.router.navigate(['']);
  }
}
