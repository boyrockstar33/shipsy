import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule'},
]

export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });