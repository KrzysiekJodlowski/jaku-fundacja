import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { SubgalleryComponent } from 'src/app/subgallery/subgallery.component';

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
        let subgalleryObject:Object = this.createSubgalleryObject(subgallery);
        this.addSubgalleryToList(subgalleryObject);
      });
    });
  }

  private addSubgalleryToList(subgallery: Object) {
    this._galleries.push(subgallery);
  }

  private createSubgalleryObject(subgallery): Object {
    let subgalleryObject = {
      title : subgallery.key,
      imagesUrls : []
    };
    this.addAllImagesToObject(subgallery, subgalleryObject);
    return subgalleryObject;
  }

  private addAllImagesToObject(subgallery: any, subgalleryObject: { title: any; imagesUrls: any[]; }) {
    subgallery.payload.forEach(picture => {
      subgalleryObject.imagesUrls.push(picture.val());
      return false;
    });
  }
}
