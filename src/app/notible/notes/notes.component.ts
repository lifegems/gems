import { Component, OnInit, Input } from '@angular/core';


import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
   listNotes() {
      return [
         {
            "name": "Jehovah's Celestial Chariot",
            "refs": "Ezekiel 1:1",
            "href": "http://wol.jw.org/en/wol/mp/r1/lp-e/w13/2013/563"
         },
         {
            "name": "Ride of the Four Horseman",
            "refs": "Revelation 6:1-3",
            "href": "https://assetsnffrgf-a.akamaihd.net/assets/m/402014047/univ/art/402014047_univ_cnt_2_xl.jpg"
         }
      ];
   }
}

@Component({
   selector: 'app-notes',
   templateUrl: './notes.component.html',
   styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
   @Input() private range: string;
   @Input() private type: string;

   private notes: Array<any>;

   constructor(private notesService: NotesService) { }

   ngOnInit() {
      this.notes = this.notesService.listNotes();
   }

}