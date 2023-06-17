import { inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";

const authLocalStorageKey = 'AUTH'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  router = inject(Router)

  get isLogued(): boolean {
    // const auth = localStorage.getItem('AUTH')
    // if(auth == null) return false
    // else JSON.parse(auth)


    return JSON.parse(localStorage.getItem(authLocalStorageKey) || 'false') as boolean;
  }

  set isLogued(value: boolean) {
    localStorage.setItem(authLocalStorageKey, JSON.stringify(value));
  }

  constructor() { }

  async login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isLogued = true
      await this.router.navigate(['/intranet/dashboard'])

      return true;
    }
    return false;
  }

  async logout() {
    this.isLogued = false;
    await this.router.navigate(['/login'])
  }

  isAuthenticated() {
    return this.isLogued;
  }
}
