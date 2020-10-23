import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingQueriesComponent } from './pending-queries.component';

describe('PendingQueriesComponent', () => {
  let component: PendingQueriesComponent;
  let fixture: ComponentFixture<PendingQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
