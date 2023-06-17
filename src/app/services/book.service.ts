import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Pageable, SearchResponse } from "./interfaces";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  async search(q: string, pageable: Pageable): Promise<SearchResponse> {
    return await firstValueFrom(this.httpClient.get<SearchResponse>(`${environment.API_URL}/api/books/search?title=${q}&pageSize=${pageable.pageSize}&page=${pageable.pageNumber}`))
  }
}
