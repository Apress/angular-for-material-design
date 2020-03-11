import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile.component';
import { Router } from '@angular/router';
import { SuperheroSidenavComponent } from './superheroes-material-design/superhero-sidenav/superhero-sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Superheroes";
  switchTabsOrSidenav: boolean;
  @ViewChild("sidenav") sidenav: SuperheroSidenavComponent;

  constructor(private router: Router){    
  }

  toggleSidenav(evt: EventEmitter<boolean>){
    evt ? this.sidenav.open() : this.sidenav.close();
  }

  switchToTabs(value: boolean){
    this.switchTabsOrSidenav = value;
  }

  navigateToCreate(){
    this.router.navigate(['/create-hero']);
  }

  heroListDescending(){
    this.router.navigate(['/heroes'], {queryParams:{sortOrder: 'descending'}});
  }

  superpowers:Array<string> = [
    "Can fly",
    "Strength and Stamina",
    "Kids love him"
  ];

  address: {
    firstLine: string,
    city: string
  } = {
    firstLine: "Road # 4",
    city: "Bengaluru"
  };

  printSuperhero(hero: Superhero){
    console.log(hero);
  }

  moveSuperhero(){
    this.address = {
      firstLine: this.address.firstLine,
      city: "Hyderabad"
    };
  }
}
