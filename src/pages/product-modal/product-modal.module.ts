import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductModal } from './product-modal';

@NgModule({
  declarations: [
    ProductModal,
  ],
  imports: [
    IonicPageModule.forChild(ProductModal),
  ],
  exports: [
    ProductModal
  ]
})
export class ProductModalModule {}
