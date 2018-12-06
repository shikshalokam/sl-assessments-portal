import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from './../../../core/services/utility-service';
import { LoaderState } from './loader';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.scss']
})
export class LoaderComponent implements OnInit {
show = false;
private subscription: Subscription;
constructor(
        private loaderService: UtilityService
    ) { }
ngOnInit() { 
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
            });
    }
ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
