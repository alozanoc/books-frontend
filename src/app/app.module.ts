import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './skeleton/sidebar/sidebar.component';
import { NavbarComponent } from './skeleton/navbar/navbar.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { Page404Component } from './pages/errors/page404/page404.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { UserSettingsComponent } from './pages/settings-page/components/user-settings/user-settings.component';
import { IntranetSkeletonComponent } from './skeleton/intranet-skeleton/intranet-skeleton.component';
import { GeneralSettingsComponent } from './pages/settings-page/components/general-settings/general-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardPageComponent,
    AboutPageComponent,
    Page404Component,
    LandingPageComponent,
    LoginPageComponent,
    SettingsPageComponent,
    UserSettingsComponent,
    IntranetSkeletonComponent,
    GeneralSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
