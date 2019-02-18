import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FixedTabComponent } from './components/fixed-tab/fixed-tab.component';
import { DynamicTabComponent } from './components/dynamic-tab/dynamic-tab.component';
import { DynamicTabContentComponent } from './components/dynamic-tab-content/dynamic-tab-content.component';
import { FixedTabContentComponent } from './components/fixed-tab-content/fixed-tab-content.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [FixedTabComponent, DynamicTabComponent, DynamicTabContentComponent, FixedTabContentComponent],
    exports: [
        CommonModule,
        FormsModule,
        FixedTabComponent, DynamicTabComponent, DynamicTabContentComponent, FixedTabContentComponent
    ]
})
export class SharedModule { }