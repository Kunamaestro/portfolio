import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurruculumComponent } from './curruculum.component';

describe('CurruculumComponent', () => {
  let component: CurruculumComponent;
  let fixture: ComponentFixture<CurruculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurruculumComponent]
    });
    fixture = TestBed.createComponent(CurruculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
