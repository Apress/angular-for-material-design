import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {

  heroes = [
    {
      name: "Chhota Bheem",
      livesIn: "Dholakpur",
      power: "Strong"
    },
    {
      name: "Spiderman",
      livesIn: "New York",
      power: "Shoot web"
    },
    {
      name: "Batman",
      livesIn: "Gotham",
      power: "Technology"
    }
  ];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  navigateToHeroDetails(heroName: string){
    this.router.navigate(["/hero", heroName]);
  }

  ngOnInit() {

    // let sortOrder = this.route.snapshot.queryParams.sortOrder;

    // if(sortOrder && sortOrder === "descending"){
    //   this.heroes= _.sortBy(this.heroes, 'name').reverse()
    // }else{
    //   this.heroes= _.sortBy(this.heroes, 'name');

    // }

    this.route
      .queryParams
      .subscribe( (p) => {
        if(p.sortOrder && p.sortOrder === "descending"){
          this.heroes= _.sortBy(this.heroes, 'name').reverse()
        }else{
          this.heroes= _.sortBy(this.heroes, 'name');
        }
      });
  }

}
