import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersApieceComponent } from './flowers-apiece.component';

describe('FlowersApieceComponent', () => {
  let component: FlowersApieceComponent;
  let fixture: ComponentFixture<FlowersApieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowersApieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowersApieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
