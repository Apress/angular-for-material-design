import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SoftwareAgreementComponent } from '../software-agreement/software-agreement.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-superhero-toolbar',
  templateUrl: './superhero-toolbar.component.html',
  styleUrls: ['./superhero-toolbar.component.css']
})
export class SuperheroToolbarComponent implements OnInit {

  @Input() showSecondRow = false;
  @Output() menuClick: EventEmitter<boolean> = new EventEmitter();
  @Output() switchToTabs: EventEmitter<boolean> = new EventEmitter();
  toggleMessage: string = "Click to Use Tabs";
  isTabs: boolean = false;

  toggleValue: boolean=true;
  fullname: string;

  toggleForMenuClick(){
    this.menuClick.emit(this.toggleValue);
    this.toggleValue = !this.toggleValue;
  }

  toggleSidenav(event: MatSlideToggleChange){
    this.switchToTabs.emit(event.checked);
    if(event.checked){
      this.isTabs = true;
      this.toggleMessage = "Click to Use Sidenav";
    }else{
      this.isTabs = false;
      this.toggleMessage = "Click to Use Tabs";
    }
    
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  agreementClick(){

    let dialogRef = this.dialog
      .open(SoftwareAgreementComponent,
        {
          width: "800px"
        });
    
      dialogRef.afterClosed()
      .subscribe(
        (data) => this.fullname = data.fullname
      );

  }

}
