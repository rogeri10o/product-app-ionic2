import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryModal } from './category-modal';

@NgModule({
  declarations: [
    CategoryModal,
  ],
  imports: [
    IonicPageModule.forChild(CategoryModal),
  ],
  exports: [
    CategoryModal
  ]
})
export class CategoryModalModule {}
