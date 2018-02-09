import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatTabsModule} from "@angular/material";
import {MockItunesService} from "./mock-itunes.service";
import {ApiComponent} from './api/api.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ShoppingComponent,
    ApiComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [MockItunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
