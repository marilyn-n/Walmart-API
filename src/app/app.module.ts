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
import { ElectronicsComponent } from './electronics/electronics.component';
import { BabyComponent } from './baby/baby.component';
import { ClothesComponent } from './clothes/clothes.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { DepartmentsComponent } from './departments/departments.component';

// routes
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'show-products', component : ProductsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'skin-care', component: SkinCareComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'baby', component: BabyComponent },
  { path: 'clothes', component: ClothesComponent },
  { path: 'make-up', component: MakeUpComponent },
  { path: 'departments', component: DepartmentsComponent},
  { path: ':id', component: SingleProductComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    SkinCareComponent,
    ElectronicsComponent,
    BabyComponent,
    ClothesComponent,
    MakeUpComponent,
    SingleProductComponent,
    DepartmentsComponent,
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
