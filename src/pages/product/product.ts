import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import {ProductService} from '../../providers/product-service';
import {ProductModal} from '../product-modal/product-modal';
/**
 * Generated class for the Product page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class Product {
  products: Array<any>;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private productService: ProductService, public alertCtrl: AlertController ) {
    this.findAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Product');
  }

  findAll() {
    this.productService.findAll()
      .then((products: Array<any>) => {
        this.products = products;
      }, (error) => {
        console.log('Erro ao obter produtos: ', error);
      });
  }

  removeProduct(product) {
    let alert = this.alertCtrl.create({
      title: 'Deletar produto',
      message: 'Deseja realmente deletar a produto \'' + product.nome + '\'?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Deletar',
          handler: (data) => {
              this.productService.delete(product.id)
              .then((res) => {
                if (res) {
                  this.findAll();
                }
              }, (error) => {
                console.log('Erro ao deletar produto: ', error);
              });
          }
        }
      ]
    });

    alert.present();
  }

  addProduct() {
    let modal = this.modalCtrl.create(ProductModal);

    modal.onDidDismiss((param) => {
      this.findAll();
    });

    modal.present();
  }

  updateProduct(product) {
    let modal = this.modalCtrl.create(ProductModal, {
      product: Object.assign({}, product)
    });

    modal.onDidDismiss((param) => {
      this.findAll();
    });

    modal.present();
  }
}
