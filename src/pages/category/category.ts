import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import {CategoryService} from '../../providers/category-service';
import {CategoryModal} from '../category-modal/category-modal';

/**
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class Category {
  categories: Array<any>;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private categoryService: CategoryService, public alertCtrl: AlertController ) {
    this.findAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category');
  }

  findAll() {
    this.categoryService.findAll()
      .then((categories: Array<any>) => {
        this.categories = categories;
      }, (error) => {
        console.log('Erro ao obter categorias: ', error);
      });
  }

  removeCategory(category) {
    let alert = this.alertCtrl.create({
      title: 'Deletar categoria',
      message: 'Deseja realmente deletar a categoria \'' + category.nome + '\'?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Deletar',
          handler: (data) => {
              this.categoryService.delete(category.id)
              .then((res) => {
                if (res) {
                  this.findAll();
                }
              }, (error) => {
                console.log('Erro ao deletar categoria: ', error);
              });
          }
        }
      ]
    });

    alert.present();
  }

  addCategory() {
    let modal = this.modalCtrl.create(CategoryModal);

    modal.onDidDismiss((param) => {
      this.findAll();
    });

    modal.present();
  }

  updateCategory(category) {
    let modal = this.modalCtrl.create(CategoryModal, {
      category: category
    });

    modal.onDidDismiss((param) => {
      this.findAll();
    });

    modal.present();
  }
}
