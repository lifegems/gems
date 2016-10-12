import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { InsortComponent } from './insort.component';
// import { InsortRouting } from './insort.routes';
import { InsightService } from './insight.service';
import { ListContainerComponent } from './../shared/list-container/list-container.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
   InsortComponent
  ],
  declarations: [
    InsortComponent,
    ListContainerComponent
  ],
  providers: [InsightService]
})
export class InsortModule { }
