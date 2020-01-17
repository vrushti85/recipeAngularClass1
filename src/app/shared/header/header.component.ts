import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showButton;
  constructor(
    private router: Router,
    private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.checkAuth
      .subscribe(res => {
        this.showButton = res;
      });
  }

  logout() {
    this.router.navigate(['sign-in']);
    this.authService.onLogout();
  }

}
