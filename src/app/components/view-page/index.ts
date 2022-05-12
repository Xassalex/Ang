import {Component, Input} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Gpu} from "../catalog-page";

@Component({
  selector: 'view-page',
  templateUrl: 'index.html',
})
export class ViewPage {
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() full_text: string = "";

  constructor(private activateRoute: ActivatedRoute) {
    const data = JSON.parse(localStorage.getItem('gpus') ?? '[]') as Gpu[]

    const gpu = data[activateRoute.snapshot.params['id']]

    this.img = gpu.img
    this.title = gpu.title
    this.price = gpu.price
    this.full_text = gpu.full_text
  }

}
