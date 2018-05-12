import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-skin-care',
  templateUrl: './skin-care.component.html',
  styleUrls: ['./skin-care.component.css']
})
export class SkinCareComponent implements OnInit {
items: any;
  constructor(private skinS: WalmartApiService) { }

  ngOnInit() {
    this.skinS.getSkinProducts()
   .subscribe((data) => {
     this.items = data.items;
   });
  }

}
