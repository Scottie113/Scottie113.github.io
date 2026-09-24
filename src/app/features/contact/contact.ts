import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { PROFILE } from '../../core/constants/profile.data';

@Component({
  selector: 'app-contact',
  imports: [SectionHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly profile = PROFILE;
}
