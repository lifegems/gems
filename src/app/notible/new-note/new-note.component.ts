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
   private newNoteRefUrl:   string;

   // MEDIA
   private newNoteMediaUrl: string;

   // XREFS
   private newNoteXRef:  string;
   private newNoteXType: string = 'GEN';

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

      console.log(NewNote);
   }

}
