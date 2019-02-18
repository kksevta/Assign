import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fixed-tab-content',
  templateUrl: './fixed-tab-content.component.html',
  styleUrls: ['./fixed-tab-content.component.scss']
})
export class FixedTabContentComponent implements OnInit {
  @Output() createTab = new EventEmitter();
  login;
  name;
  constructor() { }

  ngOnInit() {
  }

  createTabClicked() {
    if (this.name && this.login) {
      const tabInfo = {
        name: this.name,
        login: this.login,
        active: true,
        tabType: 'dynamic'
      };
      this.createTab.emit(tabInfo)
    } else {
      alert('Enter Full Information')
    }
  }
}
