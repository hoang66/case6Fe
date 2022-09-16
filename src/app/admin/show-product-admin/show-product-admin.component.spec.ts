import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductAdminComponent } from './show-product-admin.component';

describe('ShowProductAdminComponent', () => {
  let component: ShowProductAdminComponent;
  let fixture: ComponentFixture<ShowProductAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
