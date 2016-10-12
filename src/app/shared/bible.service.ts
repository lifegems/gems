import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BibleService {
   private BASE_URL = "https://www.jw.org/en/publications/bible/nwt/books/json/html/";

   constructor(private http: Http) {

   }

   listBooks(): Observable<any> {
      return this.http.get(this.BASE_URL + "?callback=?")
         .map((res: Response) => res.json())
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

   getBibleChapterText(strRange): Observable<any> {
      return this.http.get(this.BASE_URL + strRange + "?callback=?")
         .map((res: Response) => res.json())
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

   formatRange(bookid, chapterid) {
      var chapter = "";
      if (chapterid < 10) {
         chapter = "00" + chapterid;
      } else if (chapterid < 100) {
         chapter = "0" + chapterid;
      } else {
         chapter = chapterid;
      }

      return bookid + chapter + "001-" + bookid + chapter + "999";
   }
}