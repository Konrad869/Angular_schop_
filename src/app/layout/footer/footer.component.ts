import { Component, Input } from '@angular/core';

interface FooterSection {
  id: number;
  title: string;
  links: Array<{id: number; url: string; label: string}>;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() footerClass = '';
  @Input() footerSections: FooterSection[] = [];
  @Input() companyInfo = true;
}
