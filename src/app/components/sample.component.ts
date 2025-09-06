import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgStyle } from '@angular/common';

import { Input } from '@angular/core';
@Component({
  selector: 'app-sample',
  template: `
    <div cdkDrag [ngStyle]="{'top.px': top, 'left.px': left, 'position': 'absolute'}">
      <button (click)="close.emit()">×</button>
      <div>動的コンポーネントが生成されました！</div>
    </div>
  `,
  standalone: true,
  imports: [CdkDrag, NgStyle],

})
export class SampleComponent {
  @Input() top: number = 0;
  @Input() left: number = 0;
  @Output() close = new EventEmitter<void>();
}
