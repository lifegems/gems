import { Component, OnInit } from '@angular/core';

import { TopicContainer } from './../shared/topic-container';
import { TermsService } from './terms.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css', './../app.component.css'],
  providers: [TermsService]
})
export class GlossaryComponent implements OnInit {
   private terms: TopicContainer[];
   private selectedTerm: TopicContainer;
   isNewTermCollapsed: boolean = true;

   constructor(private termsService: TermsService, private modal: NgbModal) { }

   ngOnInit() {
      this.initTerms();
   }

   initTerms() {
      this.termsService.listAllTerms().subscribe(
         terms => this.terms = terms,
         err => console.log(err)
      ); 
   }

   selectTerm(term: TopicContainer) {
      this.selectedTerm = term;
   }

   addNewTerm(strNewTerm, strNewDef) {
      this.termsService.addTerm(strNewTerm, strNewDef);
      this.isNewTermCollapsed = true;
      // this.initTerms();
   }

}
