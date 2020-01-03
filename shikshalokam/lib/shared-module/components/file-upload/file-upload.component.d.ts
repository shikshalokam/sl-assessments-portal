import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class FileUploadComponent implements OnInit {
    genericData: any;
    genericForm: FormGroup;
    genericEdit: boolean;
    emitResponseType: EventEmitter<{}>;
    message: string;
    imagePath: any;
    imgURL: any;
    fileSelected: boolean;
    ngOnInit(): void;
    preview(files: any): void;
}
