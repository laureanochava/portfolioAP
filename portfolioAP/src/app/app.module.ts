import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { LogoAPComponent } from './Componentes/logo-ap/logo-ap.component';
import { RedesComponent } from './Componentes/redes/redes.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { AcercaComponent } from './Componentes/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesComponent,
    BannerComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
