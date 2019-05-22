import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgallerypreviewComponent } from './subgallerypreview.component';

describe('SubgallerypreviewComponent', () => {
  let component: SubgallerypreviewComponent;
  let fixture: ComponentFixture<SubgallerypreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgallerypreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgallerypreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
