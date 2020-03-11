import { Component, OnInit } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'superhero-profile-footer',
  templateUrl: './superhero-profile-footer.component.html',
  styleUrls: ['./superhero-profile-footer.component.css']
})
export class SuperheroProfileFooterComponent implements OnInit {

  constructor(private superheroText: SuperheroText) { }

  ngOnInit() {
  }

}
