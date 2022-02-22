import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav/nav.component';
import { BasePageComponent } from './base-page.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('BasePageComponent', () => {
  let component: BasePageComponent;
  let fixture: ComponentFixture<BasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasePageComponent, NavComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
