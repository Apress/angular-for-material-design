import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Superhero } from '../models/superhero';
import { switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit, OnDestroy {

  hero: Superhero;
  private heroes: Array<Superhero> = [
    {
      name: "Chhotta Bheem",
      email: "ChhottaBheem@angularsample.com",
      details: "A hero in Dholakpur village",
      country: "India",
      cardImage: "spiderman.jpg",
      specialPowers: ["Strong"],
      favFood: ["Laddu"]
    },
    {
      name: "Spiderman",
      email: "spiderman@angularsample.com",
      details: "A hero in New York city",
      country: "United States",
      specialPowers: ["Shoots web"],
      cardImage: "spiderman.jpg",
      favFood: ["Cheese burger"]
    },
    {
      name: "Batman",
      email: "batman@angularsample.com",
      details: "A hero in Gotham city",
      country: "United Kingdom",
      cardImage: "spiderman.jpg",
      specialPowers: ["Martial Arts"],
      favFood: ["Spaghetti"]
    }
  ];

  get heroProp(){
    return JSON.stringify(this.hero);
  }

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    function sumOfTwoNumbersInArray(a: [number, number]) { // parameter declared as a tuple
      return a[0] + a[1];
    }

    console.log("works " , sumOfTwoNumbersInArray(((): [number, number] => ([2,2]))())); // no error.
    
    let foo: [number, number] = [1, 2]; // variable explicitely defined as a tuple
    console.log("works " , sumOfTwoNumbersInArray(foo)); // no error.
  // sumOfTwoNumbersInArray(foo); // Error
    console.log("ngOnInit Called");

    // Using Snpashot
    // let heroNameParam = this.route.snapshot.params.heroName;
    // this.hero = this.heroes.find( i => i.name.toLowerCase() === heroNameParam.toLowerCase());



//    Using Observable
    let heroNameParam: string;
    this.route
      .params
      .subscribe ( r => {
        this.hero = this.heroes.find( i => i.name.toLowerCase() === r.heroName.toLowerCase());
      });

   }

   ngOnDestroy(){
     console.log("ngOnDestory called");
   }



}
