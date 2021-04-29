import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './servicios/heroes.service';
import { HeroeDetalleComponent } from './componentes/heroe-detalle/heroe-detalle.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetalleComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
