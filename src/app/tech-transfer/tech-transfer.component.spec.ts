import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTransferComponent } from './tech-transfer.component';

describe('TechTransferComponent', () => {
  let component: TechTransferComponent;
  let fixture: ComponentFixture<TechTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
