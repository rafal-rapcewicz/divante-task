import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Book {
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
     };
     averageRating: number;
  }
}

export interface Books {
  totalItems: number;
  items: Book[]
}

@Injectable()
export class BookService {

  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

  getByISBN(isbn: string): Observable<Books> {
    return this.httpClient.get(`${this.baseUrl}${isbn}`) as Observable<Books>;
  }

  getCatalog(): Observable<string[]> {
    return of([
      '9780785199670',
      '9780785194620',
      '9781627387989',
      '9781682559932',
      // '9781682559703',
      // '9781682559291',
      // '9781682558690',
      // '9781627388672',
      // '9781302906139',
      // '9781302902612',
      // '9781846538971',
      // '9781302906115',
      // '9781302906122',
      // '9780785199755',
      // '9780785199762'
    ]);
  }

  constructor(private httpClient: HttpClient) { }
}
