import {Component, Input} from "@angular/core";

@Component({
  selector: 'gpu-item',
  templateUrl: 'index.html',
})
export class GpuItem {
  @Input() id: number = 0;
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() full_text: string = "";
}

