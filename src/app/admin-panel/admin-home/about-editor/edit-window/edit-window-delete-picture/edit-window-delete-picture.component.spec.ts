import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWindowDeletePictureComponent } from './edit-window-delete-picture.component';

describe('EditWindowDeletePictureComponent', () => {
  let component: EditWindowDeletePictureComponent;
  let fixture: ComponentFixture<EditWindowDeletePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWindowDeletePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWindowDeletePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
