import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Feature } from '../models';


@Component({
  selector: 'feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent {
  @Input() feature: Feature;
  @Output() onFeatureStateChange = new EventEmitter();

  constructor() {}

  featureStateChanged() {
      this.onFeatureStateChange.emit(this.feature)
  }
}