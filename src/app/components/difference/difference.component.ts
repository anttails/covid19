import { Component, OnInit, Input } from '@angular/core';
import { faAngleDoubleUp, faAngleDoubleDown, faAngleDoubleRight, faEquals } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'c19-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.scss']
})
export class DifferenceComponent implements OnInit {

  @Input() currData: number;
  @Input() prevData: number;
  @Input() upIsGood = false;
  @Input() percentMode = false;
  dif: number;
  percent: number;

  constructor() { }

  ngOnInit(): void {
    this.dif = this.currData - this.prevData;
    if (this.percentMode) {
      this.dif *= 100;
    } else {
      this.percent = (this.currData - this.prevData) / this.prevData * 100;
    }
  }

  getIcon() {
    if (this.dif > 0) {
      return faAngleDoubleUp;
    }
    if (this.dif < 0) {
      return faAngleDoubleDown;
    }
    return faEquals;
  }

  printPlusSign(number: number) {
    return number > 0 ? '+' : '';
  }

}