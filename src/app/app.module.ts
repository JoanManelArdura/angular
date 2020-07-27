import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorinsComponent } from './colorins/colorins.component';
import { SaludoComponent } from './saludo/saludo.component';
import { SobreNosaltresComponent } from './sobre-nosaltres/sobre-nosaltres.component';
import { CapcaleraComponent } from './capcalera/capcalera.component';
import { LlistaLlibresComponent } from './llista-llibres/llista-llibres.component';
import { IniciComponent } from './inici/inici.component';
import { Error404Component } from './error404/error404.component';
import { DetallesComponent } from './detalles/detalles.component';

import { LlibresSeleccionatsService } from './llibres-seleccionats.service';

const rutasApp:Routes = [
  { path:'llista-llibres' , component: LlistaLlibresComponent },
  { path:'sobre' , component: SobreNosaltresComponent },
  { path:'detalles' , redirectTo: 'llista-llibres' },
  { path:'detalles/:llibreId' , component: DetallesComponent },
  { path:'404' , component: Error404Component },
  { path:'' , component: IniciComponent , pathMatch: 'full' },
  { path:'**' , redirectTo: '404' }


]

@NgModule({
  declarations: [
    AppComponent,
    ColorinsComponent,
    SaludoComponent,
    SobreNosaltresComponent,
    CapcaleraComponent,
    LlistaLlibresComponent,
    IniciComponent,
    Error404Component,
    DetallesComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    FormsModule
  ],
  providers: [
    LlibresSeleccionatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
