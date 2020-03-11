import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-cancel-confirm-bottomsheet',
  templateUrl: './cancel-confirm-bottomsheet.component.html',
  styleUrls: ['./cancel-confirm-bottomsheet.component.css']
})
export class CancelConfirmBottomsheetComponent implements OnInit {

  message: string;

  constructor(private bottomSheetRef: MatBottomSheetRef,
      @Inject(MAT_BOTTOM_SHEET_DATA) bottomsheetData:{ message:string}) { 
        this.message = bottomsheetData.message;
  }

  ngOnInit() {
  }

  onOkClick(){
    this.bottomSheetRef.dismiss({ clicked: "Ok"});
  }
  
  onCancelClick(){
    this.bottomSheetRef.dismiss({ clicked: "Cancel"});
  }
}
