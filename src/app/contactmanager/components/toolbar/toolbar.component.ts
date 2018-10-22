import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dvx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
