import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
items: any;
  constructor(private clotheS: WalmartApiService) { }

  ngOnInit() {
    this.clotheS.getClothes()
    .subscribe((data) => {
      this.items = data.items;
    });
  }

}
