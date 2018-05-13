import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-make-up',
  templateUrl: './make-up.component.html',
  styleUrls: ['./make-up.component.css']
})
export class MakeUpComponent implements OnInit {
  items: any;
  constructor(private makeupS: WalmartApiService) { }

  ngOnInit() {
    this.makeupS.getMakeUpProducts()
    .subscribe((data) => {
      this.items = data.items;
    });
  }

}
