import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule, MatCardModule } from '@angular/material';
import { SharedModule ,DynamicFormComponent ,CoreModule } from 'shikshalokam';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignerWorspaceComponent } from './designer-worspace/designer-worspace.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeleteConfirmComponent } from './designer-worspace/components/delete-confirm/delete-confirm.component';

@NgModule({
  declarations: [ConfigurationComponent,
    DashboardComponent,
    DesignerWorspaceComponent,
    DeleteConfirmComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MatRadioModule,
    MatCardModule,
    ConfigurationRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],

  providers: [DynamicFormComponent],
  entryComponents: [DeleteConfirmComponent]
})
export class ConfigurationModule { }
