import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspreviewComponent } from './newspreview.component';

describe('NewspreviewComponent', () => {
  let component: NewspreviewComponent;
  let fixture: ComponentFixture<NewspreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
