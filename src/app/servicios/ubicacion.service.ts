import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ubicacion } from "../models/Ubicacion";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  API_URI = 'http://localhost:4000';
  constructor(private http:HttpClient) { }

  consultarUbicaciones(){
    return this.http.get(`${this.API_URI}/ubicaciones`);
  }

  consultarUbicacion(id:string){
    return this.http.get(`${this.API_URI}/ubicaciones/${id}`);
  }

  crearUbicacion(ubicacion:Ubicacion){
    return this.http.post(`${this.API_URI}/ubicaciones`, ubicacion);
  }

  actualizarUbicacion(id:string, ubicacion:Ubicacion){
    return this.http.put(`${this.API_URI}/ubicaciones/${id}`, ubicacion);
  }

  eliminarUbicacion(id:string){
    return this.http.delete(`${this.API_URI}/ubicaciones/${id}`);
  }
}
