import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
itemId: any;
  constructor(private single: WalmartApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
       this.single.getOneItem(params.id)
      .subscribe((data) => this.itemId = data.itemId);
    });
  }

}
