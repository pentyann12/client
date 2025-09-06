import { Component, Output, EventEmitter } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sample',
  template: `
    <div cdkDrag>
      <button (click)="close.emit()">×</button>
      <div>動的コンポーネントが生成されました！</div>
    </div>
  `,
  standalone: true,
  imports: [CdkDrag],
})
export class SampleComponent {
  @Output() close = new EventEmitter<void>();
}
