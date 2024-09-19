import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinePairingComponent } from './wine-pairing.component';

describe('WinePairingComponent', () => {
  let component: WinePairingComponent;
  let fixture: ComponentFixture<WinePairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinePairingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinePairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
