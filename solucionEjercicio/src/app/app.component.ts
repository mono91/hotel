import { Component } from '@angular/core';
import { Hotel } from './Hotel';
import { Ciudad } from './Clases/Ciudad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hotel: Hotel = new Hotel();
  ciudades: Ciudad[] = []

  ngOnInit() {
    let bogota = new Ciudad(1, "Bogotá");
    this.ciudades.push(bogota)

  }

  agregar() {
    console.log(this.hotel);

  }

}
