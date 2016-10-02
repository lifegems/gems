import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsortComponent } from './insort/insort.component';
import { GlossaryComponent } from './glossary/glossary.component';

const BaseRoutes: Routes = [
   {
      path: '',
      component: DashboardComponent
   },
   {
      path: 'insort',
      component: InsortComponent
   },
   {
      path: 'glossary',
      component: GlossaryComponent
   },
   {
      path: "**",
      component: NotFoundComponent
   }
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(BaseRoutes);