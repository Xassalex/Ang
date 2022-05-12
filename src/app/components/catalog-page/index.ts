import {Component} from "@angular/core";

export type Gpu = {
  img: string;
  title: string;
  price: number;
  full_text: string;
}

@Component({
  selector: 'catalog-page',
  templateUrl: 'index.html',
})
export class CatalogPage {
  get gpus(): Gpu[] {
    const data = localStorage.getItem('gpus')
    if (!data) return []
    return JSON.parse(data) as Gpu[]
  }
}
