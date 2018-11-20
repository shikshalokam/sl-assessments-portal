import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../../services';

@Pipe({
  name: 'translate',
  // pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {}
  transform(key: any): any {
    return this.translate['language'][key] || key;
  }

}
