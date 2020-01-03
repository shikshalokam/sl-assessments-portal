import { HttpClient } from '@angular/common/http';
export declare class TranslateService {
    private http;
    language: any;
    constructor(http: HttpClient);
    use(lang: string): Promise<{}>;
}
