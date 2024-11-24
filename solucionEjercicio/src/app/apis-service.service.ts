import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from './Clases/Ciudad';
import { DetallesHotel } from './Clases/detallesHotel';
import { Hotel } from './Hotel';

@Injectable({
  providedIn: 'root'
})
export class ApisServiceService {
  
  

  constructor(private cliente: HttpClient){    
  }

  ciudades(){
    return this.cliente.get<Ciudad[]>("http://localhost:8000/api/ciudades")
  }

  hoteles(){
    return this.cliente.get<Hotel[]>("http://localhost:8000/api/hoteles")
  }

  nuevoHotel(hotel:Hotel){
    return this.cliente.post("http://localhost:8000/api/nuevohotel", hotel)
  }

  habitaciones(id: number) {
    return this.cliente.get<DetallesHotel[]>("http://localhost:8000/api/habitaciones/" + id);
  }

  mas(nueva: DetallesHotel) {
    return this.cliente.post("http://localhost:8000/api/habitacion", nueva);
  }

}
