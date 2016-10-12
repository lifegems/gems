import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotibleComponent } from './notible.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NotibleComponent]
})
export class NotibleModule { }
