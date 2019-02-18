import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab-content',
  templateUrl: './dynamic-tab-content.component.html',
  styleUrls: ['./dynamic-tab-content.component.scss']
})
export class DynamicTabContentComponent implements OnInit {
  @Input() tabInfo;

  constructor() { }

  ngOnInit() {
  }

}
