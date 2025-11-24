import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'inspection',
    loadChildren: () => import('./inspection/inspection.routes')
  },
  
];
