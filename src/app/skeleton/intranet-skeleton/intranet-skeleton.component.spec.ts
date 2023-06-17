import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetSkeletonComponent } from './intranet-skeleton.component';

describe('IntranetSkeletonComponent', () => {
  let component: IntranetSkeletonComponent;
  let fixture: ComponentFixture<IntranetSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntranetSkeletonComponent]
    });
    fixture = TestBed.createComponent(IntranetSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
