import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery/gallery.service';

@Component({
  selector: 'app-gallerypreview',
  templateUrl: './gallerypreview.component.html',
  styleUrls: ['./gallerypreview.component.css']
})
export class GallerypreviewComponent implements OnInit {
  private galleries: Object[];

  constructor(private galleryService: GalleryService) {
    this.galleries = [];
  }

  ngOnInit() {
    this.galleries = this.galleryService.galleries;
  }

}
