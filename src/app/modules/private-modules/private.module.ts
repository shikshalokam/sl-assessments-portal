import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule, JwtModuleOptions, JwtHelperService } from '@auth0/angular-jwt';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

// export function tokenGetter() {
//   return localStorage.getItem('access_token');
// }
// const JWT_Module_Options: JwtModuleOptions = {
//   config: {
//     tokenGetter: tokenGetter,
//     whitelistedDomains: ['example.com'],
//     blacklistedRoutes: ['example.com/examplebadroute/']
//   }
// };
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // JwtModule.forRoot(JWT_Module_Options)
  ],
  providers:[{
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }, JwtHelperService]
})
export class PrivateModule { }
