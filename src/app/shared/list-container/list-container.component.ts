import { Component, OnInit, Input } from '@angular/core';

var _ = require('underscore');

@Component({
   selector: 'app-list-container',
   templateUrl: './list-container.component.html',
   styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
   @Input() private list: Array<any>;
   @Input() private type: string;

   private list_cache: Array<any>;

   constructor() { }

   ngOnInit() {
      this.list_cache = this.list;
   }

   searchList(strSearch) {
      if (strSearch === "") {
         this.list = this.list_cache;
      } else {
         this.list = _.filter(this.list_cache, (list_item) => {
            return list_item.name.toUpperCase().indexOf(strSearch.toUpperCase()) > -1;
         });
      }
   }

}
