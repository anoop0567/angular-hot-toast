import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotToastComponent } from './hot-toast.component';

describe('HotToastComponent', () => {
  let component: HotToastComponent;
  let fixture: ComponentFixture<HotToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
