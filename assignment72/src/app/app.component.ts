import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
cities: string[] = ['Pune', 'Mumbai', 'Ladakh', 'Banglore', 'Manali', 'Ratnagiri', 'Srinagar', 'Lakshwadeep'];
selectedCity = '';
startdate: string;
returndate: string;
buttonClicked = false;
public displayDet() {
  this.buttonClicked = true;
console.log('Your Destination : ' + this.selectedCity);
}
}
