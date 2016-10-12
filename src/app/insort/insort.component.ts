import { Component, OnInit } from '@angular/core';

import { InsightService } from './insight.service';

var _ = require('underscore');

@Component({
   selector: 'app-insort',
   templateUrl: './insort.component.html',
   styleUrls: ['./insort.component.css']
})
export class InsortComponent implements OnInit {
   public articles;

   constructor(private itService: InsightService) { }

   ngOnInit() {
      this.itService.listArticles().subscribe(
         (article) => {
            this.articles = _.sortBy(article, 'name');
         },
         err => console.log(err)
      ); 
   }

}
