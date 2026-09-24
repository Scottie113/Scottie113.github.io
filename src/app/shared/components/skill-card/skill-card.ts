import { Component, input } from '@angular/core';
import { SkillGroup } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCard {
  group = input.required<SkillGroup>();
}
