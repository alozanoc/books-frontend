import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { Page404Component } from "./pages/errors/page404/page404.component";

const routes: Routes = [
  {path: '', component: DashboardPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'about-us', redirectTo: 'about'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
