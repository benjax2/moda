import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolerasComponent } from './pages/poleras/poleras.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { ZapatillasComponent } from './pages/zapatillas/zapatillas.component';
import { RelojComponent } from './pages/reloj/reloj.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PolerasComponent,
    PantalonesComponent,
    ZapatillasComponent,
    RelojComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
