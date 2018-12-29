import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core';
import { CriteriaComponent } from './criteria/criteria.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import {MatCardModule} from '@angular/material/card';
import { AddCriteriaBoxComponent } from 'src/app/modules/configuration/criteria/add-criteria-modal/add-criteria-modal.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
// import { MatDialog } from '@angular/material';


@NgModule({
  declarations: [CriteriaComponent,ConfigurationComponent,AddCriteriaBoxComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MatCardModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    ConfigurationRoutingModule
  ],
  entryComponents: [AddCriteriaBoxComponent],

  providers: [DynamicFormComponent
  ],
})
export class ConfigurationModule { }
