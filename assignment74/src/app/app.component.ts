import { Component } from '@angular/core';


export interface BookDetails {
  Author: string;
  Name: string ;
  Pages: number;
  Price: number;
}

const BookData: BookDetails[] = [
    {Name : 'abc', Author : 'dddddd', Pages : 400, Price : 299},
    {Name : 'xyz', Author : 'aaaaaa', Pages : 698, Price : 599},
    {Name : 'deh', Author : 'sdsd', Pages : 245, Price : 179},
    {Name : 'ffg', Author : 'sdasdasd', Pages : 345, Price : 350},

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  tableColumns: string[] = ['Name', 'Author', 'Pages', 'Price'];
  data = BookData;
}
