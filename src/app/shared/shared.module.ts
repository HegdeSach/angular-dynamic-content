import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { angularMaterialModule } from '../angular-material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...angularMaterialModule
  ],
  exports: [
    ...angularMaterialModule
  ]
})
export class SharedModule {
}
