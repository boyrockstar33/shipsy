import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from './shared/layout/layout.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing'
import { HttpClientModule } from '@angular/common/http';
import { ShipmentsService } from './shared/services/shipments.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule,
    LayoutModule
  ],
  providers: [ShipmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
