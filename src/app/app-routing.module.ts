import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ShoppingComponent} from "./shopping/shopping.component";
import {ApiComponent} from "./api/api.component";

const routes: Routes = [
  {path: 'about', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'browse', component: ShoppingComponent, pathMatch: 'full' },
  {path: 'api', component: ApiComponent, pathMatch:'full'},
  {path: '', pathMatch: 'full', redirectTo: 'about'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes, {enableTracing: false})]
})
export class AppRoutingModule {}
