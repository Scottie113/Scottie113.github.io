import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeader {
  eyebrow = input<string>('');
  title = input.required<string>();
  subtitle = input<string>('');
}
