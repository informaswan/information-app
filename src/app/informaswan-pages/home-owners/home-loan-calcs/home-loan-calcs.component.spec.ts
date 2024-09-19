import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanCalcsComponent } from './home-loan-calcs.component';

describe('HomeLoanCalcsComponent', () => {
  let component: HomeLoanCalcsComponent;
  let fixture: ComponentFixture<HomeLoanCalcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLoanCalcsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoanCalcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
