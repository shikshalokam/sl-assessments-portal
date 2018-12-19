import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { TranslateService, AuthService,ParentService,UtilityService,ApiInterceptor } from './services';
import { TranslatePipe } from './pipes';
import { CamelCasePipe } from './pipes'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ParentInterviewRoutingModule } from '../modules/parent-interview/parent-interview-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';

@NgModule({
  declarations: [
    TranslatePipe,
    CamelCasePipe,
    NavbarComponent,
    SidenavComponent,
    ResponsiveNavbarComponent
  ],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    ParentInterviewRoutingModule
  ],
  providers: [
  ],
  exports: [
    TranslatePipe,
    NavbarComponent,
    SidenavComponent,
    ResponsiveNavbarComponent,
    CamelCasePipe
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [TranslateService, AuthService,UtilityService,ParentService,ApiInterceptor]
    };
  }
}
