import {NgModule} from "@angular/core";
import {Header} from "./header";
import {MainPage} from "./main-page";
import {AddPage} from "./add-page";
import {CatalogPage} from "./catalog-page";
import {GpuItem} from "./gpu-item";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ViewPage} from "./view-page";

@NgModule({
  declarations: [Header, MainPage, AddPage, CatalogPage, ViewPage, GpuItem],
  exports: [Header, MainPage, AddPage, CatalogPage, ViewPage, GpuItem],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CompModule { }
