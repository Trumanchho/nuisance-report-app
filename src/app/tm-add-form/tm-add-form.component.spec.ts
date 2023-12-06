import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmAddFormComponent } from './tm-add-form.component';

describe('TmAddFormComponent', () => {
  let component: TmAddFormComponent;
  let fixture: ComponentFixture<TmAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmAddFormComponent]
    });
    fixture = TestBed.createComponent(TmAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
