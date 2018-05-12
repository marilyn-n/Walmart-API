import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {
items: any;
  constructor(private babyS: WalmartApiService) { }
  ngOnInit() {
    this.babyS.getBabyProducts()
    .subscribe((data) => {
      this.items = data.items;
    });
  }

}
