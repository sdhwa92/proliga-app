import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthLayoutComponent } from '@layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';
import { NavigationComponent } from '@layout/navigation/navigation.component';
import { FooterComponent } from '@layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    NavigationComponent,
    FooterComponent,
    AuthLayoutComponent
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // core & share
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
