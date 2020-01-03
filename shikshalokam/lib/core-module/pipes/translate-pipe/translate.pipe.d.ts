import { PipeTransform } from '@angular/core';
import { TranslateService } from '../../services/translate-service/translate.service';
export declare class TranslatePipe implements PipeTransform {
    private translate;
    resarray: string;
    obj: {};
    constructor(translate: TranslateService);
    transform(key: any): any;
}
