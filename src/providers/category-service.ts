import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoryService {
  baseUri: string;
  constructor(public http: Http) {

    this.baseUri ='https://product-api-rogeri10o.c9users.io/api/category/';
    console.log('Hello CategoryService Provider');
  }

  findAll() {
    //const headers = new Headers({'Content-Type': 'application/json'});
    //headers.append("Access-Control-Allow-Headers", "Content-Type, Accept");
    //headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, UPDATE");

    return new Promise((resolve, reject) => {
      this.http.get(this.baseUri /*, {headers: headers}*/)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUri + id)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  insert(category) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return new Promise((resolve, reject) => {
      this.http.post(this.baseUri, JSON.stringify(category), {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  update(category) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return new Promise((resolve, reject) => {
      this.http.put(this.baseUri, JSON.stringify(category), {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }
}
