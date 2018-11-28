import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateService, AuthService } from './services';
import { TranslatePipe } from './pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ParentInterviewRoutingModule } from '../modules/parent-interview/parent-interview-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TranslatePipe,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    RouterModule,
    ParentInterviewRoutingModule
  ],
  providers: [
  ],
  exports: [
    TranslatePipe,
    NavbarComponent,
    SidenavComponent

  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [TranslateService, AuthService]
    };
  }
}
