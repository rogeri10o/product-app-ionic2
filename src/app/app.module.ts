import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Category} from '../pages/category/category';
import {Product} from '../pages/product/product';
import {CategoryService} from '../providers/category-service';
import {ProductService} from '../providers/product-service';
import { CategoryModal } from '../pages/category-modal/category-modal';
import {ProductModal} from '../pages/product-modal/product-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Category,
    Product,
    CategoryModal,
    ProductModal
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Category,
    Product,
    CategoryModal,
    ProductModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
