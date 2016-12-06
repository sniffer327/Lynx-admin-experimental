import {Component, OnInit, Input} from '@angular/core';
import {ImageModel} from "../../Models/image.model";

@Component({
  selector: 'item-images',
  templateUrl: './item-images.component.html',
  styleUrls: ['./item-images.component.scss']
})
export class ItemImagesComponent implements OnInit {
  @Input() images: ImageModel[];

  constructor() { }

  ngOnInit() {

  }

}
