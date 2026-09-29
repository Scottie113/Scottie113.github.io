import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { PUBLICATIONS } from '../../core/constants/publications.data';
import { TEACHING } from '../../core/constants/teaching.data';

@Component({
  selector: 'app-research',
  imports: [SectionHeader],
  templateUrl: './research.html',
  styleUrl: './research.scss',
})
export class Research {
  readonly publications = PUBLICATIONS;
  readonly teaching = TEACHING;
}
