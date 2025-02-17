import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer sections correctly', () => {
    const testSections = [{
      id: 1,
      title: 'Quick Links',
      links: [
        { id: 1, url: '/terms', label: 'Terms' },
        { id: 2, url: '/privacy', label: 'Privacy' }
      ]
    }];
    
    component.footerSections = testSections;
    fixture.detectChanges();
    
    const sections = fixture.nativeElement.querySelectorAll('.footer-section');
    expect(sections.length).toBe(1);
    expect(sections[0].querySelector('h3').textContent).toBe('Quick Links');
    expect(sections[0].querySelectorAll('li').length).toBe(2);
  });

  it('should show company info section when companyInfo is true', () => {
    component.companyInfo = true;
    fixture.detectChanges();
    
    const companyInfoSection = fixture.nativeElement.querySelector('.company-info');
    expect(companyInfoSection).toBeTruthy();
  });
});
