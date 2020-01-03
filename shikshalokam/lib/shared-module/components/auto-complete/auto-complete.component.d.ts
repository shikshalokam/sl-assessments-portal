import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../core-module/services/api-service/api.service';
import { ActivatedRoute } from '@angular/router';
export declare class AutoCompeteComponent implements OnInit {
    private apiService;
    private route;
    genericData: any;
    genericForm: FormGroup;
    genericEdit: boolean;
    hostUrl: any;
    autoCompleteData: any;
    id: string;
    solutionId: any;
    constructor(apiService: ApiService, route: ActivatedRoute);
    ngOnInit(): void;
    getAutoComplete(url: any): void;
    inputChange(event: any): void;
    searchEntityIdInApi(event: any): void;
}
