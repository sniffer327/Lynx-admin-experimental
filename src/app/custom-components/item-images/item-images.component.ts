import {Component, OnInit, Input} from '@angular/core';
import {ImageModel} from "../../Models/image.model";
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'item-images',
  templateUrl: './item-images.component.html',
  styleUrls: ['./item-images.component.scss']
})

export class ItemImagesComponent implements OnInit {
  @Input() images: ImageModel[];

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('images-bag', {
      moves: function (el, container, handle) {
        return (handle.className === 'material-icons dnd-cursor');
      }
    });
  }

  ngOnInit() {

  }

  public AddImage(): void {
    this.images.unshift(new ImageModel);
  }

  public DeleteImage(image: ImageModel): void {
    let index: number = this.images.indexOf(image);
    this.images.splice(index, 1);
  }

}
