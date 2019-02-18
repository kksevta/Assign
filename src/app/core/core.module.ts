import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwErrorIfAlreadyLoaded } from './module-import-guard';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [

    ],
    providers: [

    ]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwErrorIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}