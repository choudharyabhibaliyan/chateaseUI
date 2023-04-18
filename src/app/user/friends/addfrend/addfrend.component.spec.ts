import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfrendComponent } from './addfrend.component';

describe('AddfrendComponent', () => {
  let component: AddfrendComponent;
  let fixture: ComponentFixture<AddfrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfrendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
