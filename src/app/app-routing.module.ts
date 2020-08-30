import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarUbicacionesComponent } from "./componentes/listar-ubicaciones/listar-ubicaciones.component";
import { FormUbicacionesComponent } from "./componentes/form-ubicaciones/form-ubicaciones.component";

const routes: Routes = [
  {
    
    path: '',
    redirectTo: '/ubicaciones',
    pathMatch: 'full'
  },
  {
    path: 'ubicaciones',
    component: ListarUbicacionesComponent
  },
  {
    path: 'ubicaciones/add',
    component: FormUbicacionesComponent
  },
  {
    path: 'ubicaciones/edit/:id',
    component: FormUbicacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
