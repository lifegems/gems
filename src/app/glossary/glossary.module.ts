import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

import { GlossaryComponent } from './glossary.component';

import { BoldSearch } from './shared/bold-search.pipe';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      NgbModule,
      SharedModule
   ],
   declarations: [
      BoldSearch, 
      GlossaryComponent
   ]
})
export class GlossaryModule { }
