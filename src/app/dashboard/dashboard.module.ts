import { NgModule } from '@angular/core';
import { LayoutModule } from '@shared/layout/layout.module';
import { DashboardRoutes } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, LayoutModule, DashboardRoutes],
    declarations: [DashboardComponent],
    exports: []
})
export class DashboardModule {}