import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { Converter } from "./converter";
import { InputBoolean } from "./input-boolean";

@Component({
  selector: "mos-tab",
  templateUrl: "./tab.component.html"
})
export class TabComponent implements OnInit {
  @Input() public label!: string;
  @Input() public visible: boolean = true;

  @Input()
  public get hidden(): boolean {
    return this._hidden;
  }

  public set hidden(value: boolean) {
    this._hidden = Converter.boolean(value);
  }

  private _hidden: boolean = false;

  @ViewChild(TemplateRef) public template!: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  // eslint-disable-next-line camelcase
  static ngAcceptInputType_hidden: InputBoolean;
}
