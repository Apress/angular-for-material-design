import { Component, OnInit, ViewChild } from '@angular/core';
import { Superhero } from '../models/superhero';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActionsBottomsheetComponent } from '../actions-bottomsheet/actions-bottomsheet.component';
import { SuperheroDataService } from 'src/app/data-services/superhero-data.service';

@Component({
  selector: 'app-superhero-new-list',
  templateUrl: './superhero-new-list.component.html',
  styleUrls: ['./superhero-new-list.component.css'],
  providers: [SuperheroDataService]
})
export class SuperheroNewListComponent implements OnInit {

  @ViewChild("selected") selected: any;

  private heroes: Array<Superhero>;

  listItemSelected(data){
    this.bottomsheet.open(ActionsBottomsheetComponent);
    //console.log(data);
  }

  selectionChangeHandler(event: MatSelectionListChange){
    console.log(event.option.value, event.option.selected);
  }

  constructor(private bottomsheet: MatBottomSheet,
    private heroData: SuperheroDataService) { }

  ngOnInit() {
    this.heroData
      .getSuperheroes()
      .subscribe( data => this.heroes = data);

  }

}
