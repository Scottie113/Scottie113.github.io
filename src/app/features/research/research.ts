import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { PUBLICATIONS } from '../../core/constants/publications.data';

interface TeachingEntry {
  role: string;
  organization: string;
  period: string;
  description: string;
}

// TODO: replace with your real teaching experience.
@Component({
  selector: 'app-research',
  imports: [SectionHeader],
  templateUrl: './research.html',
  styleUrl: './research.scss',
})
export class Research {
  readonly publications = PUBLICATIONS;

  readonly teaching: TeachingEntry[] = [
    {
      role: 'Teaching Assistant',
      organization: 'Your University / Department',
      period: '20XX – 20XX',
      description: 'Brief description of the course and your responsibilities.',
    },
  ];
}
