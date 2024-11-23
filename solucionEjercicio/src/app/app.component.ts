import { Component } from '@angular/core';
import { Hotel } from './Hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hotel: Hotel = new Hotel();

  agregar(){
    console.log(this.hotel);
    
  }

}
