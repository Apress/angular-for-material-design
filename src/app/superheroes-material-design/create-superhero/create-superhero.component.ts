import { Component, OnInit } from '@angular/core';
import { MatChipEvent } from '@angular/material/chips';
import { Superhero } from '../models/superhero';
import { MatDialog, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { CancelConfirmDialogComponent } from '../cancel-confirm-dialog/cancel-confirm-dialog.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CancelConfirmBottomsheetComponent } from '../cancel-confirm-bottomsheet/cancel-confirm-bottomsheet.component';
import { SuperheroDataService } from 'src/app/app-http-calls/superhero-data.service';

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.css']
})
export class CreateSuperheroComponent implements OnInit {

  superhero: Superhero;
  
  constructor(private dialog: MatDialog,
      private bottomSheet: MatBottomSheet,
      private dataService: SuperheroDataService
    ) { 
    this.superhero = new Superhero();
  }
  
  get model(){
      return JSON.stringify(this.superhero);
  }
  
  ngOnInit() {
  }
  
  add(event){
    this.superhero.favFood.push(event.value);
  }

  removeHandler(item: string){
    this.superhero.favFood.splice(this.superhero.favFood.indexOf(item), 1);
  }

  cancelCreate(){
    let ref: MatDialogRef<CancelConfirmDialogComponent> 
        = this.dialog.open(CancelConfirmDialogComponent, {
          width: "800px",
          height: "200px",
          data: {
            message: "Create Superhero action attempted to be cancelled"
          },
          hasBackdrop: true
        });
    
    // let ref: MatDialogRef<CancelConfirmDialogComponent> 
    // = this.dialog.open(CancelConfirmDialogComponent, 
    //     { data: 
    //       { 
    //         message: "Create Superhero action attempted to be cancelled"
    //       }
    //     });
    // ref.afterClosed().subscribe( (data) => {
    //   if(data.clicked === "Ok"){
    //     // Reset form here
    //   }else if(data.clicked === "Cancel"){
    //     // Do nothing. Cancel any events that navigate away from the component.
    //   }
    // });

      // let ref = this.bottomSheet.open(CancelConfirmBottomsheetComponent,
      //   {
      //     data: {
      //     message: "Create Superhero action attempted to be cancelled"
      //   }
      // });
      
      // ref.afterDismissed().subscribe(
      //   data => console.log("user selected to ", data.clicked)
      // )

   }

  //   let hero = this.superhero;
  //   this.dataService
  //     .updateHero (hero, "0.9247175939551284")
  //     .subscribe(data => console.log(data));
  // }

}
