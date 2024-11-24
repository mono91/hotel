export class Hotel{
    id: number = 0
    nombre: string = ""
    direccion: string = ""
    nit: string = ""
    ciudad: number = 0
    numeroHabitaciones: number = 0

    constructor(nombre: string, direccion: string, nit: string, ciudad: number, numeroHabitaciones: number){
        this.nombre = nombre
        this.direccion = direccion
        this.nit = nit
        this.ciudad = ciudad
        this.numeroHabitaciones = numeroHabitaciones

    }

}