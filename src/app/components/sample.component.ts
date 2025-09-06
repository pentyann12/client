import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sample',
  template: `<div cdkDrag>動的コンポーネントが生成されました！</div>`,
  standalone: true,
  imports: [CdkDrag],
})
export class SampleComponent {}
