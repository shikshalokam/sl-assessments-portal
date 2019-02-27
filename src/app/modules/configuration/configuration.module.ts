import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatRadioModule, MatButtonModule, MatCardModule } from '@angular/material';
import { SharedModule ,DynamicFormComponent } from 'shikshalokamsharedmodule';
import { CoreModule } from 'shikshalokamcoremodule';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ConfigurationComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MatRadioModule,
    MatCardModule,
    ConfigurationRoutingModule
  ],

  providers: [DynamicFormComponent
  ],
})
export class ConfigurationModule { }
