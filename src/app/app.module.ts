import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NgModule, APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule, TranslateService, SharedModule } from 'shikshalokam';
import { AuthService } from './modules/private-modules/auth-service/auth.service';
import { MatDividerModule } from '@angular/material/divider';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { JwtModule, JwtModuleOptions, JwtHelperService } from '@auth0/angular-jwt';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { NgxSpinnerModule } from "ngx-spinner";
export function tokenGetter() {
  return localStorage.getItem('auth-token');
}
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

export function authFactory(authService: AuthService) {
  return () => authService.init();
}
const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
    whitelistedDomains: ['example.com'],
    blacklistedRoutes: ['example.com/examplebadroute/']
  }
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    // CoreModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    CoreModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    NgxSpinnerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter
    //   }
    // }),
    // JwtModule.forRoot(JWT_Module_Options),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    TranslateService,
    JwtHelperService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      multi: true,
      deps: [AuthService]
    },
  ],
  exports: [NgxSpinnerModule],
  bootstrap: [AppComponent]
})


export class AppModule { }
