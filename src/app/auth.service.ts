import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public checkAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    this.checkAuth.next(token);
    return token;
  }

  onLogout() {
    localStorage.clear();
    this.checkAuth.next(false);
  }
}


