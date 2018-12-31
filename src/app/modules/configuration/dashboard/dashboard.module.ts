import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    // CoreModule,
    // NgModule,
    // SharedModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    DashboardRoutingModule
    
  ],

})
export class DashboardModule { }
