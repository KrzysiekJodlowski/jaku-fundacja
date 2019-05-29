import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subgallery',
  templateUrl: './subgallery.component.html',
  styleUrls: ['./subgallery.component.css']
})
export class SubgalleryComponent implements OnInit {
  @Input() _title: string
  @Input() _imagesUrls: any[]

  constructor() {
  }

  ngOnInit() {
  }

  public get imagesUrls(): string[] {
    return this._imagesUrls;
  }

  public set imagesUrls(_imagesUrls: string[]) {
    this.imagesUrls = _imagesUrls;
  }

  public addImageUrl(url: string) {
    this._imagesUrls.push(url);
  }


}
