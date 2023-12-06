import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTroublemakerComponent } from './view-troublemaker.component';

describe('ViewTroublemakerComponent', () => {
  let component: ViewTroublemakerComponent;
  let fixture: ComponentFixture<ViewTroublemakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTroublemakerComponent]
    });
    fixture = TestBed.createComponent(ViewTroublemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
