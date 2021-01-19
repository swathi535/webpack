import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EmptyRouteComponent } from './empty-route/empty-route.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
