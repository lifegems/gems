import { Component, OnInit, Input } from '@angular/core';

import { Note } from './../shared/note';
import { NotesService } from './../notes/notes.service';

@Component({
   selector: 'app-new-note',
   templateUrl: './new-note.component.html',
   styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
   @Input() book: any;
   @Input() chapter: number;
   @Input() verses: number;

   private aVss: Array<number>;

   // add new note data
   private newNoteType: string = 'NOTES';
   private newNoteVerse: number = 1;
   private newNoteTitle: string;
   private newNoteDesc: string;

   // NOTES
   private newNoteRefTitle: string;
   private newNoteRefUrl:   string;

   // MEDIA
   private newNoteMediaUrl: string;

   // XREFS
   private newNoteXRef:  string;
   private newNoteXType: string = 'GEN';

   constructor(private notesService: NotesService) { }

   ngOnInit() {
      this.aVss = this.getChapterArray(this.verses);
   }

   createNote() {
      let NewNote: Note = {
         book:    this.book.bookNumber,
         chapter: this.chapter,
         verse:   +this.newNoteVerse,
         type:    this.newNoteType,
         title:   this.newNoteTitle,
         description: this.newNoteDesc
      };

      if (this.newNoteType === 'NOTES' || this.newNoteType === 'MEDIA') {
         NewNote.pubrefs = [{
            title: this.newNoteRefTitle,
            url:   this.newNoteRefUrl
         }];
      }

      if (this.newNoteType === 'MEDIA') {
         NewNote.mediaurl = this.newNoteMediaUrl;
      }

      if (this.newNoteType === 'XREFS') {
         NewNote.xref  = this.newNoteXRef;
         NewNote.xtype = this.newNoteXType;
      }

      let body = JSON.stringify(NewNote);
      this.notesService.addNote(body).subscribe(
         terms => console.log(terms),
         err => console.log(err)
      );

      this.resetForm();
   }


   resetForm() {
      this.newNoteType = 'NOTES';
      this.newNoteVerse = 1;
      this.newNoteTitle = '';
      this.newNoteDesc = '';
      this.newNoteMediaUrl = '';
      this.newNoteXType = 'GEN';
      this.newNoteXRef = '';
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

}
