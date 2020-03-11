import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSidenavModule, MatSidenavContainer } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';
import { SuperheroToolbarComponent } from './superhero-toolbar/superhero-toolbar.component';
import HitCounter from './utilities/hit-counter';
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';
import { CreateSuperheroReactiveFormComponent } from './create-superhero-reactive-form/create-superhero-reactive-form.component';
import { SuperheroComponent } from './superhero/superhero.component';
import { AppRoutingModule } from '../app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SuperheroSidenavComponent } from './superhero-sidenav/superhero-sidenav.component';
import { SuperheroSidenavContainerComponent } from './superhero-sidenav-container/superhero-sidenav-container.component';
import { SuperheroSidenavContentComponent } from './superhero-sidenav-content/superhero-sidenav-content.component';
import { TabSampleComponent } from './tab-sample/tab-sample.component';
import { SuperheroesExpandableListComponent } from './superheroes-expandable-list/superheroes-expandable-list.component';
import { SuperheroNewListComponent } from './superhero-new-list/superhero-new-list.component';
import { SuperheroGridListComponent } from './superhero-grid-list/superhero-grid-list.component';
import { CancelConfirmDialogComponent } from './cancel-confirm-dialog/cancel-confirm-dialog.component';
import { SoftwareAgreementComponent } from './software-agreement/software-agreement.component';
import { CancelConfirmBottomsheetComponent } from './cancel-confirm-bottomsheet/cancel-confirm-bottomsheet.component';
import { ActionsBottomsheetComponent } from './actions-bottomsheet/actions-bottomsheet.component';
import { HomeComponent } from './home/home.component';
import { SuperheroDataService } from '../data-services/superhero-data.service';

@NgModule({
  declarations: [
    SuperheroProfileComponent, 
    SuperheroToolbarComponent, 
    SuperheroProfileFooterComponent, 
    SuperheroListComponent, 
    CreateSuperheroComponent,
    CreateSuperheroReactiveFormComponent,
    SuperheroComponent,
    ErrorPageComponent,
    SuperheroSidenavComponent,
    SuperheroSidenavContainerComponent,
    SuperheroSidenavContentComponent,
    TabSampleComponent,
    SuperheroesExpandableListComponent,
    SuperheroNewListComponent,
    SuperheroGridListComponent,
    CancelConfirmDialogComponent,
    SoftwareAgreementComponent,
    CancelConfirmBottomsheetComponent,
    ActionsBottomsheetComponent,
    HomeComponent, 
  ],
  imports: [
    AppRoutingModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule, 
    MatSelectModule,
    MatInputModule,
    MatCardModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    //MatNativeDateModule,
    MatMomentDateModule,
    FormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatBottomSheetModule,
    ReactiveFormsModule
  ],
  exports: [
    SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent,
    SuperheroSidenavComponent,
    CreateSuperheroComponent,
    CreateSuperheroReactiveFormComponent,
    SuperheroSidenavContainerComponent,
    SuperheroSidenavContentComponent,
    SuperheroesExpandableListComponent,
    SuperheroNewListComponent,
    TabSampleComponent,
    SuperheroGridListComponent
  ],
  providers:[HitCounter,    
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {       
        hasBackdrop: true,
        disableClose:false
      }
    },
    {
      provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: false,
        disableClose: true
      }
    }
  ],
  entryComponents: [
    CancelConfirmDialogComponent,
    CancelConfirmBottomsheetComponent,
    ActionsBottomsheetComponent,
    SoftwareAgreementComponent
  ]
})
export class SuperheroesMaterialDesignModule { }
