import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from 'src/app/services/hero.service';
import { EditDetailComponent } from './edit-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('EditDetailComponent', () => {
  let component: EditDetailComponent;
  let fixture: ComponentFixture<EditDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDetailComponent],
      imports: [RouterTestingModule],
      providers: [HeroService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('saveAndClose', () => {
    it('should not update hero information if no hero is selected', () => {
      component.hero = null;
      component.saveAndClose();

      expect(component.hero).toEqual(null);
    });

    it('should update hero information if hero is selected', () => {
      component.hero = { id: 1, name: 'Superman' };
      component.saveAndClose();

      expect(component.hero).not.toBeNull();
    });
  });
});
