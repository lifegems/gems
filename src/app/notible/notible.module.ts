import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NotibleComponent } from './notible.component';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';

import { NotesService } from './notes/notes.service';
import { NewNoteComponent } from './new-note/new-note.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule
  ],
  declarations: [NotibleComponent, NotesComponent, NewNoteComponent],
  providers: [NotesService]
})
export class NotibleModule { }
