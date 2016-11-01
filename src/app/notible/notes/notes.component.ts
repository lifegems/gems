import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Note } from './../shared/note';
import { NotesService } from './notes.service';

let _ = require('underscore');

@Component({
   selector: 'app-notes',
   templateUrl: './notes.component.html',
   styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
   @Input() private book;
   @Input() private chapter: number;
   @Input() private type: string;
   closeResult: string;
   isNotesNavCollapsed: boolean = true;

   private notes: Array<Note>;
   private selectedNote: Note;

   constructor(private notesService: NotesService, private modalService: NgbModal) {

   }

   ngOnInit() {
      this.notesService.listNotes(this.book.bookNumber, this.chapter).subscribe((notes) => {
            this.notes = _.filter(notes, (note) => {return note.type === this.type;});
         }, (err) => console.log(err)
      );
   }


   open(content, note) {
      this.selectedNote = note;
      this.modalService.open(content).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
   }

   private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
         return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
         return 'by clicking on a backdrop';
      } else {
         return  `with: ${reason}`;
      }
   }

}