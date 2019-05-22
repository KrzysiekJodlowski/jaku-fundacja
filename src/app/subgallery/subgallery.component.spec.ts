import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgalleryComponent } from './subgallery.component';

describe('SubgalleryComponent', () => {
  let component: SubgalleryComponent;
  let fixture: ComponentFixture<SubgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
