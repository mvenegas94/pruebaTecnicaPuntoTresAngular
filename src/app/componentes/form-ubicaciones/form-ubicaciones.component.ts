import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ubicacion } from 'src/app/models/Ubicacion';
import { UbicacionService } from "../../servicios/ubicacion.service";

@Component({
  selector: 'app-form-ubicaciones',
  templateUrl: './form-ubicaciones.component.html',
  styleUrls: ['./form-ubicaciones.component.css']
})
export class FormUbicacionesComponent implements OnInit {

  listaUbicaciones:any = [];
  ubicacion:Ubicacion = {
    id: '0',
    name: '',
    area_ms: '',
    id_recursive: null
  };
  flagEdicion = false;

  constructor(private ubicacionService:UbicacionService, private route:Router, private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const parametros = this.activeRouter.snapshot.params;
    if(parametros.id){
      this.flagEdicion = true;
      this.ubicacionService.consultarUbicacion(parametros.id).subscribe(
        res => {
          console.log(res);

          try{
            this.ubicacion = res[0];
            if(!this.ubicacion.id){
              this.route.navigate(['/ubicaciones']);
            }
          }catch(e){
            this.route.navigate(['/ubicaciones']);
          }

        },
        err => console.log(err)
      );
    }else{
      this.flagEdicion= false;
    }

    this.ubicacionService.consultarUbicaciones().subscribe(
      res => {
        this.listaUbicaciones = res;
      },
      err => console.log(err)
    );
  }

  actualizarUbicacion(){
    this.ubicacionService.actualizarUbicacion(this.ubicacion.id, this.ubicacion).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/ubicaciones']);
      },
      err => console.log(err)
    );
  }

  guardarNuevaUbicacion(){
    this.ubicacionService.crearUbicacion(this.ubicacion).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/ubicaciones']);
      },
      err => console.log(err)
    );
  }
}
