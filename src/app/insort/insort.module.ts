import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InsortComponent } from './insort.component';
// import { InsortRouting } from './insort.routes';
import { InsightService } from './insight.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule
  ],
  exports: [
    InsortComponent
  ],
  declarations: [
    InsortComponent
  ],
  providers: [InsightService]
})
export class InsortModule { }
