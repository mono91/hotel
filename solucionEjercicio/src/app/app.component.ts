import { Component } from '@angular/core';
import { Hotel } from './Hotel';
import { Ciudad } from './Clases/Ciudad';
import { DetallesHotel } from './Clases/detallesHotel';
import { HttpClient } from '@angular/common/http';
import { ApisServiceService } from './apis-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hotel: Hotel = new Hotel("", "", "", 0, 0);
  ciudades: Ciudad[] = []
  hoteles: Hotel[] = []
  nueva = new DetallesHotel();
  habitaciones: DetallesHotel[] = []
  tiposHabitaciones = [{ id: 1, nombre: "Estándar" }, { id: 2, nombre: "Junior" }, { id: 3, nombre: "Suite" }]
  acomodaciones = [{ id: 1, nombre: "Sencilla" }, { id: 2, nombre: "Doble" }, { id: 3, nombre: "Triple" }, { id: 4, nombre: "Cuadruple" }]
  acomodaciones2: any = []
  hotelHabitaciones: Hotel = new Hotel("", "", "", 0, 0);
  error: boolean = false

  constructor(private servicio: ApisServiceService) {

  }

  ngOnInit() {
    this.servicio.ciudades().subscribe(data => {
      this.ciudades = data
    },
      error => console.log(error)
    )

    this.hotelesLista()

  }

  cerrar(){
    this.error = false
  }

  hotelesLista(){
    this.servicio.hoteles().subscribe(
      data => {
        this.hoteles = data
      },
      error => {
        console.log(error)
      }
    )
  }

  tipoHabitacion(evento: any) {
    let opcion = evento.target.value
    if (opcion == "1") {
      this.acomodaciones2 = []
      this.acomodaciones2.push(this.acomodaciones[0])
      this.acomodaciones2.push(this.acomodaciones[1])
    } else if (opcion == "2") {
      this.acomodaciones2 = []
      this.acomodaciones2.push(this.acomodaciones[2])
      this.acomodaciones2.push(this.acomodaciones[3])
    } else if (opcion == "3") {
      this.acomodaciones2 = []
      this.acomodaciones2.push(this.acomodaciones[0])
      this.acomodaciones2.push(this.acomodaciones[1])
      this.acomodaciones2.push(this.acomodaciones[2])
    } else {
      this.acomodaciones2 = []
    }
  }

  actualizarDetalles() {
    let suma = 0
    this.habitaciones.forEach(e => {
      suma = suma + e.habitaciones
    })
    suma = suma + this.nueva.habitaciones
    console.log(suma);
    console.log(this.hotelHabitaciones);
    
    

    if(suma > this.hotelHabitaciones.numeroHabitaciones){
      this.error = true
      return;
    }

    this.nueva.fkHotel = this.hotelHabitaciones.id
    console.log(this.nueva);
    
    this.servicio.mas(this.nueva).subscribe(
      data => {
        console.log(data)
        this.habitacionesHotel()
      },
      error => console.log(error)
    )
  }

  habitacionesHotel(){
    this.servicio.habitaciones(this.hotelHabitaciones.id).subscribe(data => {
      console.log(data);
      
      this.habitaciones = data
    },
      error => console.log(error)
    )
  }

  panelModificacion(hotel: Hotel) {
    this.hotelHabitaciones = hotel  
    this.habitacionesHotel()  
  }

  agregar() {
    this.servicio.nuevoHotel(this.hotel).subscribe(
      data => {
        console.log(data)
        this.hotelesLista()
      },
      error => console.log(error)
    )
  }

}
