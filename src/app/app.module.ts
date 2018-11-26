import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { keycloakInitializer } from './core/auth/keycloak-initializer';
import { TranslateService } from './core/services/translate-service/translate.service';
import { ModulesModule } from './modules/modules.module';
import { AuthService } from './core/services/auth/auth.service';
import { MatDividerModule } from '@angular/material/divider';
import { MyInterceptor } from 'src/app/core/services/interceptor-service';

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
    KeycloakAngularModule,
    SharedModule,
    CoreModule,
    ModulesModule, 
    MatDividerModule,
    CoreModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
   },
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    },
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
