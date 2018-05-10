import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WalmartApiService } from './services/walmart-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';

// import { InterceptorModule } from './interceptor.module';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';

// routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'show-products', component : ProductsComponent },
  {path: ':id', component: SingleProductComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
   // InterceptorModule,
  ],
  providers: [WalmartApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
