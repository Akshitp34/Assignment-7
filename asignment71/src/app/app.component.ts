import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
username: string;
password: string;

public displayDet() {
  console.log('Username = ' + this.username + 'Password =' + this.password);
}
}
