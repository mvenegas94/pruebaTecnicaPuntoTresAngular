import { Component, OnInit } from '@angular/core';
import { UbicacionService } from "../../servicios/ubicacion.service";
import { Ubicacion } from 'src/app/models/Ubicacion';

@Component({
  selector: 'app-listar-ubicaciones',
  templateUrl: './listar-ubicaciones.component.html',
  styleUrls: ['./listar-ubicaciones.component.css']
})
export class ListarUbicacionesComponent implements OnInit {
  listaUbicaciones:any = [];
  constructor(private ubicacionService:UbicacionService) { }

  ngOnInit(): void {
    this.refrescarUbicaciones();
  }

  refrescarUbicaciones():void{
    this.ubicacionService.consultarUbicaciones().subscribe(
      res => {
        this.listaUbicaciones = res;
      },
      err => console.log(err)
    );
  }

  eliminarUbicacion(id:string){
    this.ubicacionService.eliminarUbicacion(id).subscribe(
      res => {
        console.log(res);
        this.refrescarUbicaciones();
      },
      err => console.log(err)
    );
    
  }
}
