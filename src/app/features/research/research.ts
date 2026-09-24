import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';

interface PublicationEntry {
  title: string;
  venue: string;
  year: string;
  link?: string;
}

interface TeachingEntry {
  role: string;
  organization: string;
  period: string;
  description: string;
}

// TODO: replace with your real publications and teaching experience.
@Component({
  selector: 'app-research',
  imports: [SectionHeader],
  templateUrl: './research.html',
  styleUrl: './research.scss',
})
export class Research {
  readonly publications: PublicationEntry[] = [
    {
      title: 'Add your publication title here',
      venue: 'Conference / Journal name',
      year: '20XX',
    },
  ];

  readonly teaching: TeachingEntry[] = [
    {
      role: 'Teaching Assistant',
      organization: 'Your University / Department',
      period: '20XX – 20XX',
      description: 'Brief description of the course and your responsibilities.',
    },
  ];
}
