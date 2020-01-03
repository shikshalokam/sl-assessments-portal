/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class FileUploadComponent {
    constructor() {
        this.emitResponseType = new EventEmitter();
        this.fileSelected = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} files
     * @return {?}
     */
    preview(files) {
        if (files.length === 0)
            return;
        this.fileSelected = true;
        /** @type {?} */
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        /** @type {?} */
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (/**
         * @param {?} _event
         * @return {?}
         */
        (_event) => {
            this.imgURL = reader.result;
        });
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-file-upload-field',
                template: "<div [formGroup]=\"genericForm\">\n  <div class=\"col-sm-6 fixSize _halfWidth \"> \n    <label for=\"image-file-upload\" class=\"custom-file-upload _flex-box  _justify-content-center\" >\n        <i class=\"material-icons \" *ngIf=\"!fileSelected\" >\n            add \n        </i>\n      <img [src]=\"imgURL\" *ngIf=\"fileSelected\" class=\"imageBox\">\n      <div *ngIf=\"fileSelected\"  id=\"hoverShow1\">\n          <p>{{'labels.update'| translate}}</p>\n      </div>\n      <!-- <div>\n        <i class=\"material-icons paddingContent\">\n          cloud_upload\n        </i>\n      </div>\n      <div class=\"paddingContent\">\n        {{'labels.addImage'| translate}}\n      </div> -->\n    </label>\n    <input id=\"image-file-upload\" placeholder=\"{{genericData.label | camelcase}} \"\n      formControlName=\"{{genericData?.field}}\" [required]=\"genericData.validation.required\" #file type=\"file\"\n      (change)=\"preview(file.files);\" accept=\"{{genericData?.requiredType}}\">\n    <!-- <div *ngIf=\"fileSelected\" class=\"_flexBox _justify-content-space-between selectedImage\"> -->\n\n      <!-- <img [src]=\"imgURL\" class=\"imageBox\">\n      <i class=\"material-icons\" (click)=\"file.files = null ;file.value = null ; fileSelected = false\">\n        delete\n      </i> -->\n    <!-- </div> -->\n  </div>\n</div>",
                styles: ["input[type=file]{display:none}._flexBox{display:flex!important;align-items:center;justify-content:space-between}.paddingContent{padding:0 10px;white-space:nowrap}.fileList{margin-top:60px}.wrapperCenter{padding:50px;margin:20px 0;background-color:var(--background-color);border-radius:5px}.custom-file-upload{width:150px;height:150px;white-space:nowrap;border:1px solid var(--border-color)}.marginTopBottom{margin:10px 0}.wrapper{padding:0 20px}.custom-file-upload:hover{background-color:var(--primary-color);color:var(--white-color);border:1px solid var(--primary-color)}.selectedImage{width:300px}.imageBox{width:150px;height:150px;position:relative}.custom-file-upload:hover #hoverShow1{display:flex;align-items:center;justify-content:center}.custom-file-upload #hoverShow1{display:none;position:absolute;background-color:rgba(0,0,0,.5);color:var(--white-color);width:150px;height:150px}"]
            }] }
];
FileUploadComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    emitResponseType: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FileUploadComponent.prototype.genericData;
    /** @type {?} */
    FileUploadComponent.prototype.genericForm;
    /** @type {?} */
    FileUploadComponent.prototype.genericEdit;
    /** @type {?} */
    FileUploadComponent.prototype.emitResponseType;
    /** @type {?} */
    FileUploadComponent.prototype.message;
    /** @type {?} */
    FileUploadComponent.prototype.imagePath;
    /** @type {?} */
    FileUploadComponent.prototype.imgURL;
    /** @type {?} */
    FileUploadComponent.prototype.fileSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNDLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFTVSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTlDLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBc0JoQyxDQUFDOzs7O0lBckJELFFBQVE7SUFFUixDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDcEIsT0FBTztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztZQUNyQixRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDNUIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLDRCQUE0QixDQUFDO1lBQzVDLE9BQU87U0FDUjs7WUFFRyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsTUFBTTs7OztRQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQSxDQUFBO0lBQ0gsQ0FBQzs7O1lBakNBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxxMENBQTJDOzthQUU1Qzs7OzBCQUVBLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLE1BQU07Ozs7SUFIUCwwQ0FBb0I7O0lBQ3BCLDBDQUE4Qjs7SUFDOUIsMENBQTRCOztJQUM1QiwrQ0FBZ0Q7O0lBQzlDLHNDQUFnQjs7SUFDaEIsd0NBQWU7O0lBQ2YscUNBQU87O0lBQ1AsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1maWxlLXVwbG9hZC1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKWdlbmVyaWNEYXRhO1xuQElucHV0KClnZW5lcmljRm9ybTpGb3JtR3JvdXA7XG5ASW5wdXQoKWdlbmVyaWNFZGl0OmJvb2xlYW47XG5AT3V0cHV0KCkgZW1pdFJlc3BvbnNlVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBpbWFnZVBhdGg6IGFueTtcbiAgaW1nVVJMO1xuICBmaWxlU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbm5nT25Jbml0KCl7XG4gXG59XG5wcmV2aWV3KGZpbGVzKSB7XG4gIGlmIChmaWxlcy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuO1xuICB0aGlzLmZpbGVTZWxlY3RlZCA9IHRydWU7XG4gIHZhciBtaW1lVHlwZSA9IGZpbGVzWzBdLnR5cGU7XG4gIGlmIChtaW1lVHlwZS5tYXRjaCgvaW1hZ2VcXC8qLykgPT0gbnVsbCkge1xuICAgIHRoaXMubWVzc2FnZSA9IFwiT25seSBpbWFnZXMgYXJlIHN1cHBvcnRlZC5cIjtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgdGhpcy5pbWFnZVBhdGggPSBmaWxlcztcbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pOyBcbiAgcmVhZGVyLm9ubG9hZCA9IChfZXZlbnQpID0+IHsgXG4gICAgdGhpcy5pbWdVUkwgPSByZWFkZXIucmVzdWx0OyBcbiAgfVxufVxuXG59Il19