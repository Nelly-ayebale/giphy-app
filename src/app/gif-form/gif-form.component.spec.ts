import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifFormComponent } from './gif-form.component';

describe('GifFormComponent', () => {
  let component: GifFormComponent;
  let fixture: ComponentFixture<GifFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
