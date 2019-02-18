import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab',
  templateUrl: './dynamic-tab.component.html',
  styleUrls: ['./dynamic-tab.component.scss']
})
export class DynamicTabComponent implements OnInit {
  @Input() tabInfo
  @Output() closeTab = new EventEmitter();
  @Output() selectTab = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  closeTabClicked(event) {
    event.stopPropagation();
    this.closeTab.emit(this.tabInfo);
  }
  selectTabClicked(event) {
    event.stopPropagation();
    this.selectTab.emit(this.tabInfo);
  }
}
