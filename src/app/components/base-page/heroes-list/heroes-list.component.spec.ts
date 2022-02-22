import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniDetailComponent } from '../hero-details/mini-detail/mini-detail.component';
import { HeroesListComponent } from './heroes-list.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesListComponent, MiniDetailComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set heroes on initialization', () => {
    expect(component.heroes).toBeTruthy();
  });

  it('should have selected hero set to null by default', () => {
    expect(component.selectedHero).toBeNull();
  });

  describe('setMiniDetailVisible', () => {
    it('should set detailVisibility to true', () => {
      component.setMiniDetailVisible(1);
      expect(component.miniDetailVisible).toBeTrue();
    });

    it('should set selected hero based on passed in id', () => {
      component.setMiniDetailVisible(1);
      expect(component.selectedHero).not.toBeNull();
    });
  });
});
