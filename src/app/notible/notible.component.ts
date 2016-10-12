import { Component, OnInit } from '@angular/core';
import { BibleService } from './../shared/bible.service';

var _ = require('underscore');

@Component({
   selector: 'app-notible',
   templateUrl: './notible.component.html',
   styleUrls: ['./notible.component.css']
})
export class NotibleComponent implements OnInit {
   private books = [];
   private selectedBook;
   private chapters = [];
   private bibleText;

   constructor(private bibleService: BibleService) { }

   ngOnInit() {
      this.bibleService.listBooks().subscribe(
         (books) => {
            this.books = _.toArray(books.editionData.books);
         },
         err => console.log(err)
      );
   }

   showChapters(book) {
      var chapters = parseInt(book);
      var i = 1;
      this.chapters = [];
      while (i <= chapters) {
         this.chapters.push(i);
         i = i + 1;
      }
   }

   showText(book, strChapter) {
      var bookNumber = this.books.indexOf(book) + 1;
      var strRange = this.bibleService.formatRange(bookNumber, parseInt(strChapter))
      this.bibleService.getBibleChapterText(strRange).subscribe(
         (text) => {
            this.bibleText = text.ranges[strRange].html;
         },
         (err) => console.log(err)
      );
   }

}
