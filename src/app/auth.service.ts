import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
  }
}
