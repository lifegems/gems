import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsortComponent } from './insort.component';

const InsortRoutes: Routes = [
   {
      path: '',
      component: InsortComponent
   }
];

export const InsortRouting: ModuleWithProviders = RouterModule.forChild(InsortRoutes);