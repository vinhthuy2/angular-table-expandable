import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expandable-table';

  actions = [
    'Confirm',
    'Manual',
    'Auto',
  ]
  data = [
    {
      date: 'dd-mm-yyyy',
      name: 'Tran Vinh Thuy',
      action: 1,
    },
    {
      date: 'dd-mm-yyyy',
      name: 'Tran Vinh Thuy',
      action: 2,
      expanded: false
    },
    {
      date: 'dd-mm-yyyy',
      name: 'Tran Vinh Thuy',
      action: 1
    },
    {
      date: 'dd-mm-yyyy',
      name: 'Tran Vinh Thuy',
      action: 2,
      expanded: false
    },
    {
      date: 'dd-mm-yyyy',
      name: 'Tran Vinh Thuy',
      action: 3
    },
  ]

  toggleExpansion(item: { date: string, name: string, action: number, expanded?: boolean }) {
    item.expanded = !item.expanded
  }


}
