import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsortComponent } from './insort.component';
// import { InsortRouting } from './insort.routes';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
   InsortComponent
  ],
  declarations: [InsortComponent]
})
export class InsortModule { }
