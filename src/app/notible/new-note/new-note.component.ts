import { Component, OnInit, Input } from '@angular/core';

import { Note } from './../shared/note';
import { NotesService } from './../notes/notes.service';

@Component({
   selector: 'app-new-note',
   templateUrl: './new-note.component.html',
   styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
   @Input() book: number;
   @Input() chapter: number;

   // add new note data
   private newNoteType: string = 'NOTES';
   private newNoteVerse: number = 1;
   private newNoteTitle: string;
   private newNoteDesc: string;

   // NOTES
   private newNoteRefTitle: string;
   private newNoteRefUrl: string;

   constructor() { }

   ngOnInit() {
   }

   createNote() {
      let NewNote: Note = {
         book:    this.book,
         chapter: this.chapter,
         verse:   this.newNoteVerse,
         type:    this.newNoteType,
         title:   this.newNoteTitle,
         description: this.newNoteDesc
      };

      if (this.newNoteType === 'NOTES') {
         NewNote.pubrefs = [{
            title: this.newNoteRefTitle,
            url:   this.newNoteRefUrl
         }];
      }

      console.log(NewNote);
   }

}
