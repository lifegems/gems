import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Third party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Main components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
// Main Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { InsortModule } from './insort/insort.module';
import { GlossaryModule } from './glossary/glossary.module';
import { NotibleModule } from './notible/notible.module';
import { SharedModule } from './shared/shared.module';
// Services
import { BibleService } from './shared/bible.service';
// Routing
import { Routing, RoutingProviders } from './base.routes';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    Routing,
    DashboardModule,
    InsortModule,
    GlossaryModule,
    NotibleModule,
    SharedModule
  ],
  providers: [
    RoutingProviders,
    BibleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
