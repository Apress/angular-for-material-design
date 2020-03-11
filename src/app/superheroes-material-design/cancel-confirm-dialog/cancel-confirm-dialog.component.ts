import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-confirm-dialog',
  templateUrl: './cancel-confirm-dialog.component.html',
  styleUrls: ['./cancel-confirm-dialog.component.css'],
})
export class CancelConfirmDialogComponent implements OnInit {

  message: string;

  constructor(public dialogRef: MatDialogRef<CancelConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string}) { 
      this.message = (data && data.message) || "";
  }

  onOkClick(){
    //console.log("I do nothing");
    this.dialogRef.close({clicked: "Ok"});
  }

  onCancelClick(){
    //this.dialogRef.close();
  }

  ngOnInit() {
  }

}
