import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerypreviewComponent } from './gallerypreview.component';

describe('GallerypreviewComponent', () => {
  let component: GallerypreviewComponent;
  let fixture: ComponentFixture<GallerypreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerypreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerypreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
