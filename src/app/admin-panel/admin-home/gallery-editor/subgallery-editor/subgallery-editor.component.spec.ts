import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SubgalleryEditorComponent } from "./subgallery-editor.component";

describe("SubgalleryEditorComponent", () => {
  let component: SubgalleryEditorComponent;
  let fixture: ComponentFixture<SubgalleryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubgalleryEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgalleryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
