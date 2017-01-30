import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ImageModel} from "../../Models/image.model";
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'item-images',
  templateUrl: './item-images.component.html',
  styleUrls: ['./item-images.component.scss']
})

export class ItemImagesComponent implements OnInit {
  @Input() images: ImageModel[];
  @Output() imagesChange = new EventEmitter<ImageModel[]>();

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('images-bag', {
      moves: function (el, container, handle) {

        // Костыль. Заточен под md-button
        var isDragulaTrigger = handle
          .parentElement
          .parentElement
          .classList
          .contains('dragula-trigger');

        return isDragulaTrigger;
      }
    });
  }

  ngOnInit() {

  }

  public addImage(): void {
    this.images.unshift(new ImageModel);
  }

  public deleteImage(image: ImageModel): void {
    this.images = this.images.filter(function(item) {
      return item !== image;
    });

    this.imagesChange.emit(this.images);
  }

}
