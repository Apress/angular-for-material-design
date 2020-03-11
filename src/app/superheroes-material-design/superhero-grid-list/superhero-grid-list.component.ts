import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/superhero';
import { SuperheroDataService } from 'src/app/app-http-calls/superhero-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-superhero-grid-list',
  templateUrl: './superhero-grid-list.component.html',
  styleUrls: ['./superhero-grid-list.component.css'],
  providers: [SuperheroDataService]
})
export class SuperheroGridListComponent implements OnInit {

  private heroes: Array<Superhero>;

  constructor(private heroService: SuperheroDataService) { }

  ngOnInit() {
    //this.heroService.getHeroes().then( data => this.heroes = data);
    this.heroService
      .getHeroes()
      .subscribe(
        data => this.heroes = data,
        error => console.log("Error returned", error)
        );
  }

}
