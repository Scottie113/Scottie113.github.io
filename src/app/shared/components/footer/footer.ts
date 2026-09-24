import { Component } from '@angular/core';
import { PROFILE } from '../../../core/constants/profile.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();
}
