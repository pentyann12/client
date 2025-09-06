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

  createDynamicComponent() {
    const ref = this.container.createComponent(SampleComponent);
    ref.instance.close.subscribe(() => ref.destroy());
  }
}
