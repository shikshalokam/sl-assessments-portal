import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import {  KeycloakAngularModule } from 'keycloak-angular';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from './core/services/translate-service/translate.service';
import { ModulesModule } from './modules/modules.module';
import { AuthService } from './core/services/auth/auth.service';
import { MatDividerModule } from '@angular/material/divider';
import { ApiInterceptor } from 'src/app/core/services/interceptor-service/interceptor.service';
import { ParentService } from './core/services/parent-service/parent.service';
import { ParentInterviewRoutingModule } from './modules/parent-interview/parent-interview-routing.module';
import { UtilityService } from './core/services/utility-service/utility.service';
export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}
export function authFactory(authService: AuthService) {
  return () => authService.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // KeycloakAngularModule,
    SharedModule,
    CoreModule,
    ModulesModule,
    MatDividerModule,
    CoreModule.forRoot(),
    HttpClientModule,
    ParentInterviewRoutingModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    ParentService,
    UtilityService,
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      multi: true,
      deps: [AuthService]
    },

  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
