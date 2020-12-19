import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGifComponent } from './list-gif.component';

describe('ListGifComponent', () => {
  let component: ListGifComponent;
  let fixture: ComponentFixture<ListGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
