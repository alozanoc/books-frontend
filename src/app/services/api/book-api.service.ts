import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Pageable, SearchResponse } from "./book.interfaces";
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../authentication.service";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  authenticationService = inject(AuthenticationService);

  constructor(private httpClient: HttpClient) { }

  async search(q: string, pageable: Pageable): Promise<SearchResponse> {
    const token = this.authenticationService.credentials?.token
    return await firstValueFrom(this.httpClient.get<SearchResponse>(`${environment.API_URL}/api/books/search?title=${q}&pageSize=${pageable.pageSize}&page=${pageable.pageNumber}`, {
      headers: { authorization: `Bearer ${token}` }
    }))
  }
}
