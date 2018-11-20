import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranslateService } from './services';
import { TranslatePipe } from './pipes';

@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    TranslatePipe
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [TranslateService]
    };
  }
}
