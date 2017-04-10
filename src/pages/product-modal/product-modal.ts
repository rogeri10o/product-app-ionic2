import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {ProductService} from '../../providers/product-service';
import {CategoryService} from '../../providers/category-service';

/**
 * Generated class for the ProductModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-modal',
  templateUrl: 'product-modal.html',
})
export class ProductModal {
  product: any;
  categories: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public productService: ProductService, public categoryService: CategoryService) {
    this.product = navParams.get('product') || {};
    this.categoryService.findAll()
      .then((categories: Array<any>) => {
        this.categories = categories;
      }, (error) => {
        this.categories = [];
        console.log('Erro ao obter categorias: ', error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductModal');
  }

  close() {
    this.view.dismiss();
  }

  save() {
    if (this.product.id != undefined) {
      this.productService.update(this.product)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log('Erro ao atualizar produto', error);
        });

    } else {
      this.productService.insert(this.product)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log('Erro ao cadastrar produto', error);
        });

    }
  }
}
