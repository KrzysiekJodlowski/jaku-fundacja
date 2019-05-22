import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpreviewComponent } from './aboutpreview.component';

describe('AboutpreviewComponent', () => {
  let component: AboutpreviewComponent;
  let fixture: ComponentFixture<AboutpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
