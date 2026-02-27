import { Component, signal } from '@angular/core';
import { GanttChartComponent } from './gantt-chart.component';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  imports: [GanttChartComponent],
  template: `<app-gantt-chart></app-gantt-chart>`,
})
export class App {
  protected readonly title = signal('angular-gantt-quick-start');
}
