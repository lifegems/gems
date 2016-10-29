import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NotibleComponent } from './notible.component';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';

import { NotesService } from './notes/notes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [NotibleComponent, NotesComponent],
  providers: [NotesService]
})
export class NotibleModule { }
