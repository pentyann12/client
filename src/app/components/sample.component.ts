import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

import { Input } from '@angular/core';
@Component({
  selector: 'app-sample',
  template: `
    <div cdkDrag [cdkDragFreeDragPosition]="position" class="sample-component">
      <button (click)="close.emit()">×</button>
      <div>動的コンポーネント {{ idx }}</div>
    </div>
  `,
  standalone: true,
  imports: [CdkDrag],
  styles: [`
    .sample-component {
      position: absolute;
    }
  `]
})
export class SampleComponent {
  @Input() position = { x: 0, y: 0 };
  @Input() idx = 1;
  @Output() close = new EventEmitter<void>();
}
