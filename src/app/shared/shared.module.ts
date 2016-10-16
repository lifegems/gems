import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListContainerComponent } from './list-container/list-container.component';

@NgModule({
   declarations: [
      ListContainerComponent
   ],
   imports: [
      NgbModule,
      CommonModule,
      FormsModule
   ],
   exports: [
      ListContainerComponent
   ]
})
export class SharedModule {

}