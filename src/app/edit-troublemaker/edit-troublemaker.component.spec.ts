import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTroublemakerComponent } from './edit-troublemaker.component';

describe('EditTroublemakerComponent', () => {
  let component: EditTroublemakerComponent;
  let fixture: ComponentFixture<EditTroublemakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTroublemakerComponent]
    });
    fixture = TestBed.createComponent(EditTroublemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
