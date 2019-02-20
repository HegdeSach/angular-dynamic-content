import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicMultipleOneComponent } from './dynamic-multiple-one.component';
import { DynamicMultipleTwoComponent } from './dynamic-multiple-two.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DynamicMultipleOneComponent, DynamicMultipleTwoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [DynamicMultipleOneComponent, DynamicMultipleTwoComponent]
})
export class DynamicMultipleModule {}
