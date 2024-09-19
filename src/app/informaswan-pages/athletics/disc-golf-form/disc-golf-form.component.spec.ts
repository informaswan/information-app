import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscGolfFormComponent } from './disc-golf-form.component';

describe('DiscGolfFormComponent', () => {
  let component: DiscGolfFormComponent;
  let fixture: ComponentFixture<DiscGolfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscGolfFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscGolfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
