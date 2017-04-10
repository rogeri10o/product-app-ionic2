import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {CategoryService} from '../../providers/category-service';

/**
 * Generated class for the CategoryModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category-modal',
  templateUrl: 'category-modal.html',
})
export class CategoryModal {
  category: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public categoryService: CategoryService) {
    this.category = navParams.get('category') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryModal');
  }

  close() {
    this.view.dismiss();
  }

  save() {
    if (this.category.id != undefined) {
      this.categoryService.update(this.category)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log('Erro ao atualizar categoria', error);
        });

    } else {
      this.categoryService.insert(this.category)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log('Erro ao cadastrar categoria', error);
        });

    }
  }
}
