import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  ],
  providers: [ShipmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
