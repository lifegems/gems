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
   private chapters = [];

   private bookName: string = "Select Bible Book";
   private selectedBook;
   private selectedChapter;
   
   private bibleText;
   private chapterTitle;
   private isLoading: boolean;

   private isNavCollapsed: boolean = true;

   constructor(private bibleService: BibleService) { }

   ngOnInit() {
      this.isLoading = true;
      this.bibleService.listBooks().subscribe(
         (books) => {
            this.books = _.toArray(books.editionData.books);
            this.selectedBook = this.books[0];

            this.chapters = this.getChapterArray(this.selectedBook.chapterCount);
            this.selectedChapter = this.chapters[0];
            this.showText(this.selectedBook, this.selectedChapter);
         },
         err => console.log(err)
      );
   }

   getChapterArray(intChapterCount): Array<number> {
      let chapters: number = parseInt(intChapterCount);
      let i: number = 1;
      let aChapters: Array<number> = [];
      while (i <= chapters) {
         aChapters.push(i);
         i = i + 1;
      }
      return aChapters;
   }

   showText(book, strChapter) {
      this.bookName = book.standardName;
      this.isLoading = true;
      let newChapters = this.getChapterArray(book.chapterCount)
      if (newChapters !== this.chapters) {
         this.chapters = newChapters;
      }
      this.selectedChapter = strChapter;
      var bookNumber = this.books.indexOf(book) + 1;
      var strRange = this.bibleService.formatRange(bookNumber, parseInt(strChapter))
      this.bibleService.getBibleChapterText(strRange).subscribe(
         (text) => {
            this.chapterTitle = text.ranges[strRange].citation;
            this.bibleText = text.ranges[strRange].html;
            this.isLoading = false;
         },
         (err) => console.log(err)
      );
   }

}
