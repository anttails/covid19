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
  @Input() noteParam: string;
  @Input() noteLink: string;
  @Input() clickable = false;
  @Input() showDifference = true;

  constructor(protected pageScrollService: PageScrollService) { }

  ngOnInit(): void {
    if (!this.currData) {
      this.theme = 'muted';
    }
  }

  scrollTo() {
    if (this.clickable) {
      this.scroll(this.text);
    }
  }

  noteScrollTo() {
    if (this.noteLink) {
      this.scroll(this.noteLink);
    }
  }

  private scroll(id: string) {
    this.pageScrollService.scroll({
      document: document,
      scrollTarget: '#' + id + 'Det',
      scrollOffset: 56
    });
  }
}
