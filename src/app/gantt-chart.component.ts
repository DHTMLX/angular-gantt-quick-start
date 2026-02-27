import { Component } from '@angular/core';
import {
  DhxGanttComponent,
  type AngularGanttDataConfig,
} from '@dhtmlx/trial-angular-gantt';

import { links, tasks } from './demo-data';

@Component({
  selector: 'app-gantt-chart',
  standalone: true,
  imports: [DhxGanttComponent],
  host: { style: 'display:block;height:100%;' },
  template: `
    <dhx-gantt
      style="display:block;height:100%;"
      [tasks]="tasks"
      [links]="links"
      [config]="config"
      [data]="dataConfig">
    </dhx-gantt>
  `,
})
export class GanttChartComponent {
  tasks = tasks;
  links = links;

  config = {
    date_format: '%Y-%m-%d %H:%i',
    columns: [
      { name: 'text', tree: true, width: '*' },
      { name: 'start_date', label: 'Start', align: 'center' },
      { name: 'duration', label: 'Duration', align: 'center' },
      { name: 'add', width: 44 },
    ],
  };

  dataConfig: AngularGanttDataConfig = {
    save: (entity, action, item, id) => {
      console.log('save', { entity, action, item, id });
    },
  };
}