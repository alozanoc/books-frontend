import { Component } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  username = "";

  password = "";

  message = ""

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {

  }
  async login() {
    const authenticated = await this.authenticationService.login(this.username, this.password)
    if(authenticated) {
      this.message = '';
    } else {
      this.message = 'Usuario y/o contraseñas incorrecto';
    }
  }
}
