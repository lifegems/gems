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
      // this.notes = _.filter(this.listTextNotes(), (note) => {
      //    return note.type === this.type;
      // });
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

   listTextNotes() {
      return [
         {
            book: 2,
            chapter: 3,
            verse: 30,
            type: 'NOTES',
            title: 'Words getting explained',
            description: 'This is an example of how something could get explained.'
         },
         {
            book: 2,
            chapter: 3,
            verse: 33,
            type: 'NOTES',
            title: 'Word Definition',
            description: 'Clarify a word simply by showing its definition.'
         },
         {
            book: 19,
            chapter: 6,
            verse: 10,
            type: 'MEDIA',
            title: "Jehovah's Celestial Chariot",
            description: "The organization has always been on the move and Jehovah has wanted us to know it!",
            url: 'https://s-media-cache-ak0.pinimg.com/originals/db/91/19/db91192bf6ace70f3eaa704e9d5d6b4b.jpg'
         },
         {
            book: 19,
            chapter: 6,
            verse: 10,
            type: 'MEDIA',
            title: "Great Spiritual Temple",
            description: "The organization has always been on the move and Jehovah has wanted us to know it!",
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/1102014250/univ/art/1102014250_univ_cnt_1_xl.jpg'
         },
         {
            book: 19,
            chapter: 6,
            verse: 23,
            type: 'MEDIA',
            title: 'Four Horsemen of Revelation',
            description: 'The ride of the four horsemen pictures the turning of events during the last days.',
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/402014047/univ/art/402014047_univ_cnt_2_xl.jpg'
         },
         {
            book: 19,
            chapter: 6,
            verse: 23,
            type: 'MEDIA',
            title: 'Valley of the Dry Bones pt.1',
            description: "The dry bones symbolize the captivity of Jehovah's people. It began in the second century.",
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/2016203/E/art/2016203_E_cnt_1_xl.jpg'
         },
         {
            book: 19,
            chapter: 6,
            verse: 23,
            type: 'MEDIA',
            title: 'Valley of the Dry Bones pt.2',
            description: "The dry bones symbolize the captivity of Jehovah's people. This ended in 1919.",
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/2016203/E/art/2016203_E_cnt_2_xl.jpg'
         },
         {
            book: 40,
            chapter: 13,
            verse: 30,
            type: 'MEDIA',
            title: 'Wheat and the Weeds',
            description: "The wheat and the weeds are similar to the dry bones.",
            url: 'http://wol.jw.org/en/wol/mp/r1/lp-e/w13/2013/1053'
         },
         {
            book: 20,
            chapter: 1,
            verse: 1,
            type: 'MEDIA',
            title: 'Highlights of Proverbs',
            description: "Highlights of the book of Proverbs",
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/1001071940/univ/art/1001071940_univ_sqr_xl.jpg'
         },
         {
            book: 6,
            chapter: 17,
            verse: 1,
            type: 'XREFS',
            title: 'Deuteronomy 3:33',
            description: "This scripture has some text in it. As you read it, you'll realize why",
            xrefs: "5.3.33",
            xtype: "General"
         },
         {
            book: 6,
            chapter: 17,
            verse: 20,
            type: 'XREFS',
            title: 'Judges 8:12',
            description: "Add some text here and you will have yourselve a scripture.",
            xrefs: "6.8.12",
            xtype: "Fulfilled Prophecy"
         }
      ];
   }

}