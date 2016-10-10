import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlossaryComponent } from './glossary.component';

import { BoldSearch } from './shared/bold-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [BoldSearch, GlossaryComponent]
})
export class GlossaryModule { }
