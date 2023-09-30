import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreComponent } from './entre.component';

describe('EntreComponent', () => {
  let component: EntreComponent;
  let fixture: ComponentFixture<EntreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntreComponent]
    });
    fixture = TestBed.createComponent(EntreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
