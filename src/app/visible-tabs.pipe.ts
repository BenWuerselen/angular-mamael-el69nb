import { Pipe, PipeTransform } from "@angular/core";
import { TabComponent } from "./tab.component";

@Pipe({
  name: "visibleTabs",
  pure: false
})
export class VisibleTabsPipe implements PipeTransform {
  private hidden: boolean;

  transform(tabs: TabComponent[], hidden?: boolean) {
    this.hidden = hidden ?? true;  
    return tabs.filter(t => t.hidden !== this.hidden);
  }
}
