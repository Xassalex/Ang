import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CompModule} from "./components";
import {RouterModule, Routes} from "@angular/router";
import {MainPage} from "./components/main-page";
import {CatalogPage} from "./components/catalog-page";
import {AddPage} from "./components/add-page";
import {ViewPage} from "./components/view-page";

const appRoutes: Routes =[
  { path: '', component: MainPage},
  { path: 'gpu', component: CatalogPage},
  { path: 'gpu/add', component: AddPage},
  { path: 'gpu/:id', component: ViewPage},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CompModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
