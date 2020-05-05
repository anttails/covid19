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
  @Input() suffix2: string;
  @Input() theme: string;
  @Input() translateKey: string;
  @Input() dataset: string[];
  @Input() comparisonPrefix: string;
  @Input() totalKey: string;
  //Initally only for sympthons. Kinda homage
  lstAtchins: any[];
  prefix: string;

  ngOnInit(): void {
    this.prefix = this.type + '_';
    if (this.currData) {
      this.lstAtchins = this.dataset.map(x => {
        let entry = {
          key: x,
          currValue: null,
          prevValue: null
        };
        entry.currValue = this.setupNumber(this.currData, x);
        if (this.prevData) {
          entry.prevValue = this.setupNumber(this.prevData, x);
        }
        return entry;
      });

      if (this.totalKey) {
        this.prefix = this.type;
        if (this.comparisonPrefix) {
          this.comparisonPrefix = this.comparisonPrefix.substring(0, this.comparisonPrefix.length - 1);
        }
        this.lstAtchins.push({
          key: this.totalKey,
          currValue: this.setupNumber(this.currData, ''),
          prevValue: this.setupNumber(this.prevData, ''),
          total: true
        });
      }
      this.lstAtchins = this.lstAtchins.sort((a, b) => b.currValue - a.currValue || (b.key > a.key ? 1 : (b.key < a.key ? -1 : 0)));
    }
  }

  private setupNumber(obj: Update, key: string) {
    if (obj) {
      if (this.comparisonPrefix) {
        return (obj[this.prefix + key + this.suffix] + (this.suffix2 ? obj[this.prefix + key + this.suffix2] : 0)) / (obj[this.comparisonPrefix + key + this.suffix] + (this.suffix2 ? obj[this.comparisonPrefix + key + this.suffix2] : 0));
      }
      return obj[this.prefix + key + this.suffix] + (this.suffix2 ? obj[this.prefix + key + this.suffix2] : 0);
    }
    return 0;

  }
}
