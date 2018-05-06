import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WalmartApiService } from './services/walmart-api.service';
import { HttpClientModule } from '@angular/common/http';
// import { InterceptorModule } from './interceptor.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   // InterceptorModule,
  ],
  providers: [WalmartApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
