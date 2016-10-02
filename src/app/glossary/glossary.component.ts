import { Component, OnInit } from '@angular/core';
import { TopicContainer } from './../shared/topic-container';
import { TermsService } from './terms.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css', './../app.component.css'],
  providers: [TermsService]
})
export class GlossaryComponent implements OnInit {
   private terms: TopicContainer[];
   private selectedTerm: TopicContainer;

   constructor(private termsService: TermsService) { }

   ngOnInit() {
      this.terms = this.termsService.listTerms();
   }

   selectTerm(term: TopicContainer) {
      this.selectedTerm = term;
   }

}
