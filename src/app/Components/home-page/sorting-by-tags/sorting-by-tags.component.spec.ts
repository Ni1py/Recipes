import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingByTagsComponent } from './sorting-by-tags.component';

describe('SortingByTagsComponent', () => {
  let component: SortingByTagsComponent;
  let fixture: ComponentFixture<SortingByTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingByTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingByTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
