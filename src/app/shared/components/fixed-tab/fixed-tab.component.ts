import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fixed-tab',
  templateUrl: './fixed-tab.component.html',
  styleUrls: ['./fixed-tab.component.scss']
})
export class FixedTabComponent implements OnInit {
  @Input() tabInfo
  @Output() selectTab = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectTabClicked() {
    this.selectTab.emit(this.tabInfo);
  }
}
