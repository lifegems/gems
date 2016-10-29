import { Component, OnInit, Input } from '@angular/core';

import { NotesService } from './notes.service';

let _ = require('underscore');

@Component({
   selector: 'app-notes',
   templateUrl: './notes.component.html',
   styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
   @Input() private booknumber: number;
   @Input() private chapter: number;
   @Input() private type: string;

   private notes: Array<any>;

   constructor(private notesService: NotesService) { }

   ngOnInit() {
      this.notesService.listNotes(this.booknumber, this.chapter).subscribe((notes) => {
            this.notes = _.filter(notes, (note) => return note.type === this.type);
         }, (err) => console.log(err)
      );
   }

}