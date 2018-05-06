import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { InterceptorModule } from '../interceptor.module';
import 'rxjs/add/operator/map';


@Injectable()
export class WalmartApiService {
  base_URL = 'http://api.walmartlabs.com';
  constructor(private _http: HttpClient) { }

  listItems() {
    return this._http.get(`${this.base_URL}/v1/items?&upc=035000521019&apiKey=8kyu45v4g2d6cykr92ckmjj5`)
    .map(result => result);
  }

}


// by id
// http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=8kyu45v4g2d6cykr92ckmjj5

// by upc
// http://api.walmartlabs.com/v1/items?&upc=035000521019&apiKey=8kyu45v4g2d6cykr92ckmjj5

