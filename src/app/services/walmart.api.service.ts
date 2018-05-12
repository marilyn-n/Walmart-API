import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WalmartApiService {
  base_URL = 'http://api.walmartlabs.com';
  constructor(private _http: Http) { }

 getItems() {
    return this._http.get(`${this.base_URL}/v1/paginated/items?brand=bimbo&apiKey=8kyu45v4g2d6cykr92ckmjj5`)
    .map((res: Response) => res.json());
  }

  getSkinProducts() {
    return this._http.get(`${this.base_URL}/v1/paginated/items?brand=nivea&apiKey=8kyu45v4g2d6cykr92ckmjj5`)
    .map((res: Response) => res.json());
  }

}


// by id
// http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=8kyu45v4g2d6cykr92ckmjj5

// by upc
// http://api.walmartlabs.com/v1/items?&upc=035000521019&apiKey=8kyu45v4g2d6cykr92ckmjj5

// http://api.walmartlabs.com/v1/paginated/items?brand=bimbo&apiKey=8kyu45v4g2d6cykr92ckmjj5
