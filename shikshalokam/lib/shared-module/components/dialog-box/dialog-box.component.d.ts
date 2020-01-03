import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class DialogBoxComponent implements OnInit {
    dialogRef: MatDialogRef<DialogBoxComponent>;
    data: any;
    constructor(dialogRef: MatDialogRef<DialogBoxComponent>, data: any);
    ngOnInit(): void;
    onCancel(): void;
}
