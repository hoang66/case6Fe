import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductDTComponent } from './show-product-dt.component';

describe('ShowProductDTComponent', () => {
  let component: ShowProductDTComponent;
  let fixture: ComponentFixture<ShowProductDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductDTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
