import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroWithImageComponent } from './intro-with-image.component';

describe('IntroWithImageComponent', () => {
  let component: IntroWithImageComponent;
  let fixture: ComponentFixture<IntroWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
