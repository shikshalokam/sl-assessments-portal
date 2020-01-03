import { MatDialogRef } from '@angular/material';
export declare class ShareLinkViewComponent {
    dialogRef: MatDialogRef<ShareLinkViewComponent>;
    data: any;
    sharLink: any;
    constructor(dialogRef: MatDialogRef<ShareLinkViewComponent>, data: any);
    onNoClick(): void;
    copyLink(inputElement: any): void;
}
