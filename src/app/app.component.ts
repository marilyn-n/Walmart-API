import { Component, OnInit } from '@angular/core';
import { WalmartApiService  } from './services/walmart-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _walmart: WalmartApiService  ) { }

  ngOnInit() {
    this._walmart.findList()
    .subscribe(res => {
    console.log(res);
    });
  }


}
