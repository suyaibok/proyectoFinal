import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySplashComponent } from './body-splash.component';

describe('BodySplashComponent', () => {
  let component: BodySplashComponent;
  let fixture: ComponentFixture<BodySplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodySplashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodySplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
