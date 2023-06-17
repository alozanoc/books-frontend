import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { Page404Component } from "./pages/errors/page404/page404.component";
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { IntranetSkeletonComponent } from "./skeleton/intranet-skeleton/intranet-skeleton.component";
import { GeneralSettingsComponent } from "./pages/settings-page/components/general-settings/general-settings.component";
import { UserSettingsComponent } from "./pages/settings-page/components/user-settings/user-settings.component";
import { AuthenticationService } from "./services/authentication.service";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'intranet', component: IntranetSkeletonComponent, children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'settings', component: SettingsPageComponent, children: [
          { path: 'general', component: GeneralSettingsComponent },
          { path: 'user', component: UserSettingsComponent },
        ] },
    ], canActivate: [
      () => {
        return inject(AuthenticationService).isAuthenticated();
      }
    ]},
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
