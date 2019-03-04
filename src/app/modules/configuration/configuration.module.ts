import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule, MatCardModule } from '@angular/material';
import { SharedModule ,DynamicFormComponent } from 'shikshalokam';
import { CoreModule } from 'shikshalokam';
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
