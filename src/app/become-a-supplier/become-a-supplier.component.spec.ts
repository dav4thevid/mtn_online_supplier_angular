import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeASupplierComponent } from './become-a-supplier.component';

describe('BecomeASupplierComponent', () => {
  let component: BecomeASupplierComponent;
  let fixture: ComponentFixture<BecomeASupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeASupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeASupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
