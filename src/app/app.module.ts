import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShoppingComponent } from './shopping/shopping.component';
import {MatButtonModule, MatCardModule} from "@angular/material";
import {MockItunesService} from "./mock-itunes.service";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [MockItunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
