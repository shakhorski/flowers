import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetsComponent } from './bouquets.component';

describe('BouquetsComponent', () => {
  let component: BouquetsComponent;
  let fixture: ComponentFixture<BouquetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouquetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
