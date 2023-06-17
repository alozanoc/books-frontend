import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from "../../services/book.service";
import { SearchResponse } from "../../services/interfaces";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit{

  q: string = '';

  books: SearchResponse = {
    totalElements: 0,
    pageable: { pageSize: 1, pageNumber: 0 }
  } as SearchResponse;

  @ViewChild("searchInput") searchInput!: ElementRef;

  constructor(private bookService: BookService) {

  }

  async ngOnInit(): Promise<void> {
    await this.search();
  }

  async search() {
    this.books = await this.bookService.search(this.q, this.books.pageable);
    this.searchInput.nativeElement.select();
  }


  changePage($event: PageEvent) {
    this.books.pageable.pageNumber = $event.pageIndex;
    this.books.pageable.pageSize = $event.pageSize;
    this.search();
  }
}
