import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { EDUCATION, EXPERIENCE, LEADERSHIP } from '../../core/constants/experience.data';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experience = EXPERIENCE;
  readonly leadership = LEADERSHIP;
  readonly education = EDUCATION;
}
