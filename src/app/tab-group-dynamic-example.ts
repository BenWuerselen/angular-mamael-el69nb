import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
  ViewChild
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { TabComponent } from "./tab.component";

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: "tab-group-dynamic-example",
  templateUrl: "tab-group-dynamic-example.html"
})
export class TabGroupDynamicExample {
  @ContentChildren(TabComponent)
  private tabs!: QueryList<TabComponent>;
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
