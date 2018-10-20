import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    data: {
      meta: {
        title: '',
        override: true,
        description: ''
      }
    }
  }
];

export const DashboardRoutes = RouterModule.forChild(routes);
