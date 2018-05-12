import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WalmartApiService} from './services/walmart.api.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';

// import { InterceptorModule } from './interceptor.module';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { SkinCareComponent } from './skin-care/skin-care.component';

// routes
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'show-products', component : ProductsComponent },
  { path: 'categories', component: CategoriesComponent }, // here its the problem
  { path: 'skin-care', component: SkinCareComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    SkinCareComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
   // InterceptorModule,
  ],
  providers: [WalmartApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
