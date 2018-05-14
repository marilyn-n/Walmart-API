import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
categories: Array<object>;
  constructor(private depS: WalmartApiService) { }

  ngOnInit() {
    this.depS.getAllDepartments()
    .subscribe((data) => {
      this.categories = data.categories;
    });
  }

}
