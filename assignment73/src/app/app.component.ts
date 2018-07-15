import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
carName: string;
carType: string;
carNumber: string;
numberofseats: number[] = [2, 3, 4, 5, 6, 7, 8];
carSeats: number;
buttonClicked = false;
public displayDet() {
  this.buttonClicked = true;
console.log('Car : ' + this.carName);
}
}
