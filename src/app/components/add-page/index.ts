import {Component, Input} from "@angular/core";
import {Gpu} from "../catalog-page";

@Component({
  selector: 'add-page',
  templateUrl: 'index.html',
})
export class AddPage {
  gpu: Gpu = {
    img: "",
    title: "",
    price: 0,
    full_text: ""
  }

  addGpu = () => {
    const data = JSON.parse(localStorage.getItem('gpus') ?? '[]') as Gpu[];

    localStorage.setItem('gpus', JSON.stringify([...data, this.gpu]))
  }
}
