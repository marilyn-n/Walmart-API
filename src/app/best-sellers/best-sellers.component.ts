import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  items: any;
  constructor(private bestS: WalmartApiService) { }

  ngOnInit() {
    this.bestS.getBestSellers()
      .subscribe((data) => {
        this.items = data.items;
      });
  }
}
