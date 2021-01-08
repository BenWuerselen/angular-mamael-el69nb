import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
  ViewChild
} from "@angular/core";

import { FormControl } from "@angular/forms";
import { MatTabGroup } from "@angular/material/tabs";
import { TabComponent } from "./tab.component";

@Component({
  selector: "mos-tabs",
  templateUrl: "./tabs.component.html"
})
export class TabsComponent implements AfterViewInit {
  selected = new FormControl(0);
  isMenuVisible = false;

  @ViewChild(MatTabGroup)
  public tabGroup!: MatTabGroup;

  @ContentChildren(TabComponent)
  private tabs!: QueryList<TabComponent>;

  constructor() {}

  public ngAfterViewInit() {
    // Reorder all tabs from visible to hidden
    if (this.tabs.length > 1) {
      const arr = Array<TabComponent>(this.tabs.length);
      // Add visible tabs
      arr.push(...this.getTabs(false));

      const hiddenTabs = this.getTabs(true);
      if (hiddenTabs.length) {
        // Add hidden tabs
        arr.push(...hiddenTabs);
        // Show menu, if hidden tabs exist
        this.isMenuVisible = true;
      }
      // Replace existings tabs with reordered
      this.tabs.reset(arr);
    }
  }

  public updateTabs(tab: TabComponent) {
    const visibleTabs = this.getTabs(false);

    if (visibleTabs.length) {
      // Hide last visible tab
      visibleTabs[visibleTabs.length - 1].hidden = true;
      // Show selected tab
      tab.hidden = false;
      // Activate selected tab
      this.selected.setValue(visibleTabs.length - 1);
    }
  }

  private getTabs(hidden: Boolean): TabComponent[] {
    return this.tabs.filter(t => t.hidden === hidden);
  }
}
