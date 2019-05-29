import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery/gallery.service';
import { SubgalleryComponent } from '../subgallery/subgallery.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private galleries: Object[];

  constructor(private galleryServic: GalleryService) { 
    this.galleries = [];
  }

  ngOnInit() {
    this.galleries = this.galleryServic.galleries;
  }
}  
