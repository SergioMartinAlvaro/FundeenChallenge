import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffteamComponent } from './staffteam.component';

describe('StaffteamComponent', () => {
  let component: StaffteamComponent;
  let fixture: ComponentFixture<StaffteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
