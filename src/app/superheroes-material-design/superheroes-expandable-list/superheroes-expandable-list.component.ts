import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-superheroes-expandable-list',
  templateUrl: './superheroes-expandable-list.component.html',
  styleUrls: ['./superheroes-expandable-list.component.css']
})
export class SuperheroesExpandableListComponent implements OnInit {

  private heroes: Array<Superhero> = [
    {
      name: "Chhotta Bheem",
      email: "ChhottaBheem@angularsample.com",
      details: "A hero in Dholakpur village",
      country: "India",
      cardImage: "spiderman.jpg",
      specialPowers: ["is strong"],
      favFood: ["Laddu"],
      isExpanded: true,
    },
    {
      name: "Spiderman",
      email: "spiderman@angularsample.com",
      details: "A hero in New York city",
      country: "United States",
      specialPowers: ["shoots web"],
      cardImage: "spiderman.jpg",
      favFood: ["Cheese burger"],
      isExpanded: false,
    },
    {
      name: "Batman",
      email: "batman@angularsample.com",
      details: "A hero in Gotham city",
      country: "United Kingdom",
      cardImage: "spiderman.jpg",
      specialPowers: ["is good at martial arts"],
      favFood: ["Spaghetti"],
      isExpanded: true,

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
