import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { PROJECTS } from '../../core/constants/projects.data';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, SectionHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = PROJECTS;
}
