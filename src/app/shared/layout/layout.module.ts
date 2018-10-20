import { NgModule } from '@angular/core';
import { SidebarComponent } from '@shared/layout/sidebar/sidebar.component'
import { ShipmentsComponent } from '@shared/layout/shipments/shipments.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SidebarComponent, ShipmentsComponent],
    exports: [SidebarComponent, ShipmentsComponent]
})

export class LayoutModule {}