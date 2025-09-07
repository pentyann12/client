import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './components/sample.component';
import { ComponentRef } from '@angular/core';

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

  private componentRefs: ComponentRef<SampleComponent>[] = [];
  private createcounter = 1;

  createDynamicComponent(top: number = 0, left: number = 0) {
    const ref = this.container.createComponent(SampleComponent);
    ref.instance.position = {x: left, y: top};
    ref.instance.idx = this.createcounter;
    ref.instance.close.subscribe(() => {
      ref.destroy();
      this.componentRefs = this.componentRefs.filter(r => r !== ref);
    });
    this.componentRefs.push(ref);
    this.createcounter++;
  }

  alignComponents() {
    this.componentRefs.forEach((ref, i) => {
      ref.instance.position = {x: i * 50, y: i * 50};
    });
  }
}
