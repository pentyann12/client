import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './components/sample.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  createDynamicComponent(top: number = 0, left: number = 0) {
    const ref = this.container.createComponent(SampleComponent);
    ref.instance.top = top;
    ref.instance.left = left;
    ref.instance.close.subscribe(() => ref.destroy());
  }
}
