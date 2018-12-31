import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MatButtonModule,MatCardModule} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core';
import { CriteriaComponent } from './criteria/criteria.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { AddCriteriaBoxComponent } from 'src/app/modules/configuration/criteria/add-criteria-modal/add-criteria-modal.component';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
@NgModule({
  declarations: [CriteriaComponent,ConfigurationComponent,AddCriteriaBoxComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    ConfigurationRoutingModule
  ],
  entryComponents: [AddCriteriaBoxComponent],

  providers: [DynamicFormComponent
  ],
})
export class ConfigurationModule { }
