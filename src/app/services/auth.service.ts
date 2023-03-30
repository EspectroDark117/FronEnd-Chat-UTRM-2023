import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isLogged(): boolean {
    const token = this.getToken();
    return token !== null
  }

  getToken() {
    const token = sessionStorage.getItem('token');
    if (token != 'undefined ') {
      return token;
    } else {
      return null;
    }
  }


  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
