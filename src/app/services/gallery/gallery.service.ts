import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private _galleries: Object[];

  constructor(private fb: AngularFireDatabase) {
    this._galleries = [];
   }

  public get galleries(): Object[] {
    this.getImagesFromFirebase();
    return this._galleries;
  }
  

  private getImagesFromFirebase() {
    this.fb.list("gallery").snapshotChanges().subscribe(galleries => {
      galleries.forEach(subgallery => {
        let subgalleryObject = this.createSubgalleryObject(subgallery);
        this.addSubgalleryToList(subgalleryObject);
      });
    });
  }

  private addSubgalleryToList(subgalleryObject: { title: any; photos: any[]; }) {
    this._galleries.push(subgalleryObject);
  }

  private createSubgalleryObject(subgallery) {
    let subgalleryObject = {
      title: subgallery.key,
      photos: []
    };
    subgallery.payload.forEach(picture => {
      subgalleryObject.photos.push(picture.val());
      return false;
    });
    return subgalleryObject;
  }
}
