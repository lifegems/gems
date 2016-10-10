import { Component, OnInit } from '@angular/core';

import { TopicContainer } from './../shared/topic-container';
import { TermsService } from './terms.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

let _ = require('underscore');

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css', './../app.component.css'],
  providers: [TermsService]
})
export class GlossaryComponent implements OnInit {
   private termsCache: TopicContainer[];
   private terms: TopicContainer[];
   private selectedTerm: TopicContainer;
   isNewTermCollapsed: boolean = true;

   constructor(private termsService: TermsService, private modal: NgbModal) { }

   ngOnInit() {
      this.initTerms();
   }

   initTerms() {
      this.termsService.listTerms().subscribe(
         (terms) => {
            this.terms = _.sortBy(terms, 'name');
            this.termsCache = this.terms;
         },
         err => console.log(err)
      ); 
   }

   selectTerm(term: TopicContainer) {
      this.selectedTerm = term;
   }

   addNewTerm(strNewTerm, strNewDef) {
      this.termsService.addTerm(strNewTerm, strNewDef).subscribe(
         terms => console.log(terms),
         err => console.log(err)
      );
      this.isNewTermCollapsed = true;
      this.initTerms();
   }

   searchTerm(strValue) {
      if (strValue === "") {
         this.terms = this.termsCache;
      } else {
         this.terms = _.filter(this.termsCache, (term) => {
            return term.name.toUpperCase().indexOf(strValue.toUpperCase()) > -1;
         });
      }
   }
}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'boldSearch'
})
export class BoldSearch implements PipeTransform {
   transform(value: string, boldString: string): string {
      if (boldString === "") {
         return value;
      }

      let aValue = value.split(boldString);
      return aValue.join("<b>" + boldString + "</b>");
   }
}