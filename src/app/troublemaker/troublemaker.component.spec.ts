import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroublemakerComponent } from './troublemaker.component';

describe('TroublemakerComponent', () => {
  let component: TroublemakerComponent;
  let fixture: ComponentFixture<TroublemakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TroublemakerComponent]
    });
    fixture = TestBed.createComponent(TroublemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
