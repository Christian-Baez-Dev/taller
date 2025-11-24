import { Routes } from '@angular/router';

export const inspectionRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/inspection-form-page/inspection-form-page')
  }
];

export default inspectionRoutes
