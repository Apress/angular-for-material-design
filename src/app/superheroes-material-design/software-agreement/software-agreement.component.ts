import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-software-agreement',
  templateUrl: './software-agreement.component.html',
  styleUrls: ['./software-agreement.component.css']
})
export class SoftwareAgreementComponent implements OnInit {
  fullname: string;

  constructor(public dialogRef: MatDialogRef<SoftwareAgreementComponent>) { 
  }

  ngOnInit() {
  }

  onAgree(){
    this.dialogRef.close({
      clicked: "agree",
      fullname: this.fullname
    });
  }

  onCancel(){
    this.dialogRef.close({
      clicked: "cancel"
    })
  }

}
