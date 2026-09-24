import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SkillCard } from '../../shared/components/skill-card/skill-card';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { PROJECTS } from '../../core/constants/projects.data';
import { SKILL_GROUPS } from '../../core/constants/skills.data';
import { PROFILE } from '../../core/constants/profile.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard, SkillCard, SectionHeader],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly profile = PROFILE;
  readonly featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);
  readonly skillGroups = SKILL_GROUPS;
}
