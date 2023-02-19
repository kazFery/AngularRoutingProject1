import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsHomeeComponent } from './projects-homee.component';

describe('ProjectsHomeeComponent', () => {
  let component: ProjectsHomeeComponent;
  let fixture: ComponentFixture<ProjectsHomeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsHomeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsHomeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
