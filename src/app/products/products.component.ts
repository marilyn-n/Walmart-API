import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  items: any;
  constructor(private _walmartS: WalmartApiService) { }

  ngOnInit() {
    this._walmartS.getItems()
      .subscribe((data) => {
        this.items = data.items;
      });

  }

}
