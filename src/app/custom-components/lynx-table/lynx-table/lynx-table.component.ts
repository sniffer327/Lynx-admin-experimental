import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lynx-table',
  templateUrl: './lynx-table.component.html',
  styleUrls: ['./lynx-table.component.scss']
})
export class LynxTableComponent implements OnInit {

  @Input() items: any;

  constructor() { }

  ngOnInit() {
  }

}
