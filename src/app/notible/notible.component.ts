import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BibleService } from './../shared/bible.service';
import { NotesService } from './notes/notes.service';

var _ = require('underscore');

@Component({
   selector: 'app-notible',
   templateUrl: './notible.component.html',
   styleUrls: ['./notible.component.scss']
})
export class NotibleComponent implements OnInit {
   private book: number;
   private chapter: number;

   private books = [];
   private chapters = [];

   private bookName: string = "Select Bible Book";
   private selectedBook;
   private selectedChapter;
   
   private bibleText;
   private chapterTitle;
   private isLoading: boolean;

   private isNavCollapsed: boolean = true;

   constructor(
      private bibleService: BibleService,
      private notesService: NotesService,
      private route: ActivatedRoute,
      private router: Router) {
      
   }

   ngOnInit() {
      this.route.params.subscribe((params) => {
         this.book    = +params['book'];
         this.chapter = +params['chapter'];
         this.loadPageText();
      });
   }

   navigateReader(book, chapter) {
      this.router.navigate(['/notible', book, chapter]);
   }

   loadPageText() {
      this.isLoading = true;
      this.bibleService.listBooks().subscribe(
         (books) => {
            this.books = _.toArray(books.editionData.books);
            this.selectedBook = this.books[this.book - 1];

            this.chapters = this.getChapterArray(this.selectedBook.chapterCount);
            this.selectedChapter = this.chapters[this.chapter - 1];
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
      this.selectedBook = book;
      this.isLoading = true;
      let newChapters = this.getChapterArray(book.chapterCount);
      if (newChapters !== this.chapters) {
         this.chapters = newChapters;
      } else {
         this.isNavCollapsed = true;
      }
      this.selectedChapter = strChapter;
      var bookNumber = this.books.indexOf(book) + 1;
      var strRange = this.bibleService.formatRange(bookNumber, parseInt(strChapter))
      this.bibleService.getBibleChapterText(bookNumber, parseInt(strChapter)).subscribe(
         (text) => {
            this.chapterTitle = text.ranges[strRange].citation;
            this.bibleText = text.ranges[strRange].html;
            this.isLoading = false;
         },
         (err) => console.log(err)
      );
   }

}
