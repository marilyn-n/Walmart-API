import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
items: any;
  constructor(private catService: WalmartApiService) { }

  ngOnInit() {
  //   this.catService.getSpetials()
  //   .subscribe((data) => {
  //     this.items = data.items;
  //   });
  // }

}
}
