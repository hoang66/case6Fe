import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcheckoutComponent } from './showcheckout.component';

describe('ShowcheckoutComponent', () => {
  let component: ShowcheckoutComponent;
  let fixture: ComponentFixture<ShowcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
