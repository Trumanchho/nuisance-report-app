import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmListComponent } from './tm-list.component';

describe('TmListComponent', () => {
  let component: TmListComponent;
  let fixture: ComponentFixture<TmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmListComponent]
    });
    fixture = TestBed.createComponent(TmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
