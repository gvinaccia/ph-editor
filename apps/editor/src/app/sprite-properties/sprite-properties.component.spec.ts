import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritePropertiesComponent } from './sprite-properties.component';

describe('SpritePropertiesComponent', () => {
  let component: SpritePropertiesComponent;
  let fixture: ComponentFixture<SpritePropertiesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SpritePropertiesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
