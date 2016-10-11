import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsortComponent } from './insort.component';
// import { InsortRouting } from './insort.routes';
import { InsightService } from './insight.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
   InsortComponent
  ],
  declarations: [InsortComponent],
  providers: [InsightService]
})
export class InsortModule { }
