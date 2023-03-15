import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditModeComponent } from './card-edit-mode.component';

describe('CardEditModeComponent', () => {
  let component: CardEditModeComponent;
  let fixture: ComponentFixture<CardEditModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEditModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
