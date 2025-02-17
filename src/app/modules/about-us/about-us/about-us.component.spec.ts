import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title correctly', () => {
    const testTitle = 'Test Title';
    component.title = testTitle;
    fixture.detectChanges();
    
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toBe(testTitle);
  });

  it('should render content sections correctly', () => {
    const testSections = [
      { id: 1, content: 'Test Content 1' },
      { id: 2, content: 'Test Content 2' }
    ];
    
    component.contentSections = testSections;
    fixture.detectChanges();
    
    const sections = fixture.nativeElement.querySelectorAll('.content-section');
    expect(sections.length).toBe(2);
    expect(sections[0].querySelector('p').innerHTML).toBe('Test Content 1');
  });

  it('should apply custom section class', () => {
    const testClass = 'custom-section';
    component.sectionClass = testClass;
    fixture.detectChanges();
    
    const section = fixture.nativeElement.querySelector('section');
    expect(section.classList.contains(testClass)).toBeTrue();
  });
});
