import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTabAction, SelectTabAction, RemoveTabAction } from './ngrx/actions/app-core.actions';
import { getTabsFromAppState } from './ngrx/reducers/root.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testsoroco';
  tabs = [];
  constructor(private store: Store<any>) { }


  ngOnInit() {
    this.store.select(getTabsFromAppState).subscribe((tabs) => {
      this.tabs = tabs;
    });
  }
  createTab(event) {
    event.tabID = this.getTabID()

    this.store.dispatch(new AddTabAction(event));
  }

  selectTab(event) {
    this.store.dispatch(new SelectTabAction(event.tabID));
  }

  getTabID() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  closeTab(event) {
    this.store.dispatch(new RemoveTabAction(event.tabID));
  }
}
