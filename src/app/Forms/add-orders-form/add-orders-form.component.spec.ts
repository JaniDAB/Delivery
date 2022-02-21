import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdersFormComponent } from './add-orders-form.component';

describe('AddOrdersFormComponent', () => {
  let component: AddOrdersFormComponent;
  let fixture: ComponentFixture<AddOrdersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrdersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
