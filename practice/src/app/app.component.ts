import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ="Top 5 Movies" ;
  
  books: any[] = [
    {
      name: "Think and Grow Rich",
      price: 359
    },
    {
      name: "Acers of Diamond",
      price: 200
    },
    {
      name: "Atomic Habits",
      price: 587
    },
    {
      name: "Power of Habit",
      price: 650
    },
    {
      name: "Option B",
      price: 350
    }
  ];

  name = 'Hello World';
}
class Movie {
  title : string | undefined;
  director : string | undefined;
  cast : string | undefined;
  releaseDate : string | undefined;
}