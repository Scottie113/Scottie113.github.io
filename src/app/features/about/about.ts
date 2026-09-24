import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { SkillCard } from '../../shared/components/skill-card/skill-card';
import { PROFILE } from '../../core/constants/profile.data';
import { SKILL_GROUPS } from '../../core/constants/skills.data';

@Component({
  selector: 'app-about',
  imports: [SectionHeader, SkillCard],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly profile = PROFILE;
  readonly skillGroups = SKILL_GROUPS;
}
