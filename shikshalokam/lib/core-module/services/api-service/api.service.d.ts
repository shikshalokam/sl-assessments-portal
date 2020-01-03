import { HttpClient } from '@angular/common/http';
export declare class ApiService {
    private http;
    constructor(http: HttpClient);
    get(url: string): import("rxjs/internal/Observable").Observable<Object>;
    getJSON(url: string): import("rxjs/internal/Observable").Observable<Object>;
    post(url: string, updateData: any): import("rxjs/internal/Observable").Observable<Object>;
    upload(url: string, file: [], name: string): import("rxjs/internal/Observable").Observable<import("@angular/common/http/src/response").HttpEvent<Object>>;
}
