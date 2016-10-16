import { Component, OnInit } from '@angular/core';
let _ = require('underscore');

import { TermsService } from './terms.service';
import { ListContainerComponent } from './../shared/list-container/list-container.component';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css', './../app.component.css'],
  providers: [TermsService]
})
export class GlossaryComponent implements OnInit {
   isNewTermCollapsed: boolean = true;
   private terms: Array<any>;

   constructor(private termsService: TermsService) { }

   ngOnInit() {
      this.initTerms();
   }

   initTerms() {
      this.termsService.listTerms().subscribe(
         (terms) => {
            // this.terms = _.sortBy(terms, 'name');
            this.terms = _.map(terms, (term) => {
               return {
                  name: term.name,
                  href: term.description
               };
            });
         },
         err => console.log(err)
      ); 
   }

   addNewTerm(strNewTerm, strNewDef) {
      this.termsService.addTerm(strNewTerm, strNewDef).subscribe(
         terms => console.log(terms),
         err => console.log(err)
      );
      this.isNewTermCollapsed = true;
      this.initTerms();
   }
}