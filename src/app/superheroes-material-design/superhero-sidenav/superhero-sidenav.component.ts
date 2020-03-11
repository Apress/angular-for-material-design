import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-superhero-sidenav',
  templateUrl: './superhero-sidenav.component.html',
  styleUrls: ['./superhero-sidenav.component.css']
})
export class SuperheroSidenavComponent implements OnInit {

  @ViewChild("sidenav") sidenav: MatSidenav;
  @Input("position") position: string="start";

  constructor() { }

  open(){
    this.sidenav.open();
  }

  close(){
    this.sidenav.close();
  }

  ngOnInit() {   

  }

}
