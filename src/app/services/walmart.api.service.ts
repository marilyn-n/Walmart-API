import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WalmartApiService {
  base_URL = 'http://api.walmartlabs.com';
  api_key = 'apiKey=8kyu45v4g2d6cykr92ckmjj5';
  constructor(private _http: Http) { }

 getItems() {
    return this._http.get(`${this.base_URL}/v1/paginated/items?brand=bimbo&${this.api_key}`)
    .map((res: Response) => res.json());
  }

  getAllDepartments() {
    return this._http.get(`${this.base_URL}/v1/taxonomy?${this.api_key}`)
    .map((res: Response) => res.json());
  }

  getSkinProducts() {
    return this._http.get(`${this.base_URL}/v1/paginated/items?brand=nivea&${this.api_key}`)
    .map((res: Response) => res.json());
  }

  getElectronics() {
   return this._http.get(`${this.base_URL}/v1/paginated/items?brand=samsung&${this.api_key}`)
   .map((res: Response) => res.json());
  }

  getBabyProducts() {
    return this._http.get(`${this.base_URL}/v1/paginated/items?brand=gerber&${this.api_key}`)
    .map((res: Response) => res.json());
  }

  getClothes() {
    return this._http.get(`${this.base_URL}/v1/paginated/items?brand=george&${this.api_key}`)
    .map((res: Response) => res.json());
  }

  getMakeUpProducts() {
    return this._http.get(`${this.base_URL}/v1/paginated/items?brand=maybelline&${this.api_key}`)
    .map((res: Response) => res.json());
  }

  getOneItem(id) {
    return this._http.get(`${this.base_URL}/v1/paginated/items?${this.api_key}`)
    .map((res: Response) => res.json());
  }


  // getSpetials() {
  //   return this._http.get(`${this.base_URL}/v1/feeds/specialbuy?${this.api_key}&amp;categoryId=3944`)
  //   .map((res: Response) => res.json());
  // }
}

// http://api.walmartlabs.com/v1/feeds/specialbuy?apiKey=8kyu45v4g2d6cykr92ckmjj5


// by id
// http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=8kyu45v4g2d6cykr92ckmjj5

// by upc
// http://api.walmartlabs.com/v1/items?&upc=035000521019&apiKey=8kyu45v4g2d6cykr92ckmjj5

// http://api.walmartlabs.com/v1/taxonomy?o&apiKey=8kyu45v4g2d6cykr92ckmjj5
