import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { WelcomeComponent } from './components/welcom/welcome.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { StarComponent } from './components/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const myRoutes:any = [
  { path: "products", component:ProductListComponent},
  { path: "products:id", component:ProductDetailComponent},
  { path: "welcome", component:WelcomeComponent},
  { path: "", redirectTo: "welcome", pathMatch: 'full' },
  { path: "**", redirectTo: "welcome", pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
