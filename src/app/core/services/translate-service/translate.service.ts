import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable()
export class TranslateService {

  language: any = {};

  constructor(private apiService: ApiService) { }

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/${lang || 'en'}.json`;

      this.apiService.getJSON(langPath).subscribe(
        translation => {
          this.language = Object.assign({}, translation || {});
          resolve(this.language);
        },
        error => {
          this.language = {};
          resolve(this.language);
        }
      );
    });
  }
}
