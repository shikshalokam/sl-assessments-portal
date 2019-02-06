import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateService, AuthService,ParentService,UtilityService,ApiInterceptor, ReportService,OperationsService } from './services';
import { TranslatePipe, NoValuePipe } from './pipes';
import { CamelCasePipe } from './pipes'
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';
import { AuthGuard } from '../core/auth-gaurd/auth.gaurd'
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProgramSidenavComponent } from './components/program-sidenav/program-sidenav.component';
@NgModule({
  declarations: [
    TranslatePipe,
    CamelCasePipe,
    NoValuePipe,
    NavbarComponent,
    SidenavComponent,
    ResponsiveNavbarComponent,
    ProgramSidenavComponent
  ],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    HttpModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
  ],
  exports: [
    CommonModule,
    TranslatePipe,
    NavbarComponent,
    SidenavComponent,
    ResponsiveNavbarComponent,
    CamelCasePipe,
    NoValuePipe,
    ProgramSidenavComponent

  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [TranslateService, AuthService,AuthGuard,UtilityService,ParentService,ApiInterceptor,ReportService,OperationsService]
    };
  }
}
