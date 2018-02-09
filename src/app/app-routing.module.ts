import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ShoppingComponent} from "./shopping/shopping.component";

const routes: Routes = [
  {path: 'about', component: LandingPageComponent},
  {path: 'browse', component: ShoppingComponent },
  {path: '', pathMatch: 'full', redirectTo: 'about'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes, {enableTracing: false})]
})
export class AppRoutingModule {}
