import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Dependency } from '../../models';


@Component({
  selector: 'dependency-card',
  templateUrl: './dependency-card.component.html',
  styleUrls: ['./dependency-card.component.css']
})
export class DependencyCardComponent {
  @Input() dependency: Dependency;
  @Input() checked: boolean = false;
  @Input() selectable: boolean = false;
  @Output() onDependencyStateChange = new EventEmitter();

  constructor() {}

  /**
   * Notify parent that a dependency has been selected or unselected.
   * Parent has to maintain it's own state of selected dependencies.
   */
  dependencyStateChanged() {
    this.onDependencyStateChange.emit(this.dependency)
  }
}