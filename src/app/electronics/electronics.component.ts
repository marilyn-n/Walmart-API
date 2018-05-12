import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
items: any;
  constructor(private electronicS: WalmartApiService) { }

  ngOnInit() {
    this.electronicS.getElectronics()
    .subscribe((data) => {
      this.items = data.items;
    });
  }

}
