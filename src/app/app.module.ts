import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShoppingComponent } from './shopping/shopping.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatIconRegistry} from "@angular/material";
import {MockItunesService} from "./mock-itunes.service";
import { ContactComponent } from './contact/contact.component';
import { ApiComponent } from './api/api.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ShoppingComponent,
    ContactComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule],
  providers: [MockItunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
