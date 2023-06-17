import { inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationApiService } from "./api/authentication-api.service";
import { SimpleUserResponse } from "./api/authentication.interfaces";

const authLocalStorageKey = 'AUTH'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  router = inject(Router)

  authenticationApiService = inject(AuthenticationApiService)

  get credentials(): SimpleUserResponse | undefined {
    return JSON.parse(localStorage.getItem(authLocalStorageKey) || 'undefined') as SimpleUserResponse | undefined;
  }

  set credentials(value: SimpleUserResponse | undefined) {
    localStorage.setItem(authLocalStorageKey, JSON.stringify(value));
  }

  constructor() { }

  async login(username: string, password: string) {
    try {
      this.credentials = await this.authenticationApiService.login(username, password);
      await this.router.navigate(['/intranet/dashboard'])
      return true;
    } catch (e) {
      this.credentials = undefined
      return false;
    }
  }

  async logout() {
    this.credentials = undefined;
    await this.router.navigate(['/login'])
  }

  isAuthenticated() {
    return this.credentials !== undefined;
  }
}
