import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormUbicacionesComponent } from './componentes/form-ubicaciones/form-ubicaciones.component';
import { ListarUbicacionesComponent } from './componentes/listar-ubicaciones/listar-ubicaciones.component';

import { UbicacionService } from "./servicios/ubicacion.service";

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormUbicacionesComponent,
    ListarUbicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UbicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
