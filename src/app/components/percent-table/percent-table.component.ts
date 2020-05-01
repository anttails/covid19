import { Component, OnInit, Input } from '@angular/core';
import { Update } from 'src/app/models/update.model';

@Component({
  selector: 'c19-percent-table',
  templateUrl: './percent-table.component.html',
  styleUrls: ['./percent-table.component.scss']
})
export class PercentTableComponent implements OnInit {

  constructor() { }

  @Input() currData: Update;
  @Input() prevData: Update;
  @Input() type: string;
  @Input() suffix: string = '';
  @Input() theme: string;
  @Input() translateKey: string;
  @Input() dataset: number[];
  @Input() comparisonPrefix: string;
  //Initally only for sympthons. Kinda homage
  lstAtchins: number[];
  prefix: string;

  ngOnInit(): void {
    this.prefix = this.type + '_';
    if (this.currData) {
      this.lstAtchins = this.dataset.sort((a, b) => this.currData[this.prefix + b + this.suffix] - this.currData[this.prefix + a + this.suffix]);
    }
  }

  getNumber(data: Update, type: string) {
    if (this.comparisonPrefix) {
      return data[this.prefix + type + this.suffix] / data[this.comparisonPrefix + type + this.suffix];
    } else {
      return data[this.prefix + type + this.suffix];
    }
  }

}
