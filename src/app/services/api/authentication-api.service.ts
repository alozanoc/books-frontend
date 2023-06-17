import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";
import { SimpleUserResponse } from "./authentication.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiService {

  constructor(private httpClient: HttpClient) { }

  async login(username: string, password: string): Promise<SimpleUserResponse> {
    return await firstValueFrom(this.httpClient.post<SimpleUserResponse>(`${environment.API_URL}/api/auth/login`,
      {
        username: username,
        password: password
      }
    ))
  }
}
