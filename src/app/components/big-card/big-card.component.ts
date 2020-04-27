import { Component, OnInit, Input } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'c19-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {

  @Input() currData: number;
  @Input() prevData: number;
  @Input() total: number;
  @Input() text: string;
  @Input() theme = 'muted';
  @Input() icon = faInfo;
  @Input() upIsGood = false;
  @Input() small = false;
  @Input() hueg = false; // Hueg like an XBOX
  @Input() note = false;
  @Input() clickable = false;

  constructor(protected pageScrollService: PageScrollService) { }

  ngOnInit(): void {
    if (!this.currData) {
      this.theme = 'muted';
    }
  }

  scrollTo() {
    if (this.clickable) {
      this.pageScrollService.scroll({
        document: document,
        scrollTarget: '#' + this.text + 'Det',
        scrollOffset: 56
      });
    }
  }

}
