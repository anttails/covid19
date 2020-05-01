import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Update, ARSLIST, AGEGROUPLIST } from 'src/app/models/update.model';
import { faInfo, faMars, faVenus, faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'c19-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() currData: Update;
  @Input() prevData: Update;
  @Input() type: string;
  @Input() theme: string;
  @Input() upIsGood: boolean = false;
  @Input() icon: IconDefinition = faInfo;

  @ViewChildren(ChartComponent) charts: QueryList<any>;

  mode: string;

  maleIcon: IconDefinition = faMars;
  femaleIcon: IconDefinition = faVenus;
  helpIcon: IconDefinition = faInfoCircle;

  showArs: boolean = false;
  showAge: boolean = false;

  arsList: string[] = ARSLIST;
  ageGroup: string[] = AGEGROUPLIST;

  ageChartM: number[] = [];
  ageChartF: number[] = [];
  ageChartAll: number[] = [];
  ageChartNewM: number[] = [];
  ageChartNewF: number[] = [];
  ageChartNewAll: number[] = [];
  ageChartLabels: number[] = [];

  frChartTheme: any = {};
  frChartOptions: any = {
    chart: {
      width: "100%",
      type: "pie",
      fontFamily: '"Manrope", sans-serif',
      animations: {
        enabled: false
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return val.toFixed(2) + "%";
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -10,
          minAngleToShowLabel: 20
        }
      }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            pie: {
              dataLabels: {
                minAngleToShowLabel: 35
              }
            }
          }
        }
      },
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            pie: {
              dataLabels: {
                minAngleToShowLabel: 50
              }
            }
          }
        }
      }
    ]
  };

  ncChartOptions: any = {
    chart: {
      width: "100%",
      type: "donut",
      fontFamily: '"Manrope", sans-serif',
      animations: {
        enabled: false
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
      /*formatter: function (val, opts) {
        return val.toFixed(2) + "%";
      }*/
    },
    plotOptions: {
      pie: {
        donut: {
          size: '45%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontFamily: 'inherit',
              fontWeight: 700,
              offsetY: 6
            },
            total: {
              show: true,
              showAlways: true
            }
          }
        },
        /*  dataLabels: {
            minAngleToShowLabel: 40
          }*/
      }
    },
    responsive: [
      /*{
        breakpoint: 768,
        options: {
          minAngleToShowLabel: 50
        }
      },
      {
        breakpoint: 480,
        options: {
          minAngleToShowLabel: 60
        }
      }*/
    ]
  };

  chartTooltip: any = {
    fillSeriesColor: true,
    theme: 'dark',
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      let total = 0;
      for (let x of series) {
        total += x;
      }
      let selected = series[seriesIndex];
      return w.config.labels[seriesIndex] + '<b>: ' + selected + '</b> <small>(' + (selected / total * 100).toFixed(2) + '%)</small>';
    }
  };

  constructor(protected translate: TranslateService) { }

  ngOnInit(): void {
    this.mode = this.type + '_';

    this.showArs = this.arsList.some(ars => this.currData.hasOwnProperty(this.mode + ars) && this.currData[this.mode + ars]);

    this.showAge = this.ageGroup.some(ageGroup => this.currData.hasOwnProperty(this.mode + ageGroup + '_m') && this.currData[this.mode + ageGroup + '_m'])
      && this.ageGroup.some(ageGroup => this.currData.hasOwnProperty(this.mode + ageGroup + '_f') && this.currData[this.mode + ageGroup + '_f']);

    // Sort by value descending
    if (this.showArs) {
      this.arsList = this.arsList.sort((a, b) => this.currData[this.mode + b] - this.currData[this.mode + a]);
    }

    if (this.showAge) {
      this.translate.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
        this.updateLabels();
      });

      this.ageChartM = this.ageGroup.map(ageGroup => this.currData[this.mode + ageGroup + '_m']);
      this.ageChartF = this.ageGroup.map(ageGroup => this.currData[this.mode + ageGroup + '_f']);
      this.ageChartAll = this.ageGroup.map(ageGroup => this.currData[this.mode + ageGroup + '_m'] + this.currData[this.mode + ageGroup + '_f']);

      if (this.prevData) {
        this.ageChartNewM = this.ageGroup.map(ageGroup => this.currData[this.mode + ageGroup + '_m'] - this.prevData[this.mode + ageGroup + '_m']);
        this.ageChartNewF = this.ageGroup.map(ageGroup => this.currData[this.mode + ageGroup + '_f'] - this.prevData[this.mode + ageGroup + '_f']);
        this.ageChartNewAll = this.ageGroup.map(ageGroup => (this.currData[this.mode + ageGroup + '_m'] + this.currData[this.mode + ageGroup + '_f']) - (this.prevData[this.mode + ageGroup + '_m'] + this.prevData[this.mode + ageGroup + '_f']));
      }

      const color = getComputedStyle(document.documentElement).getPropertyValue('--' + this.theme) || '#000000';
      this.frChartTheme = {
        monochrome: {
          enabled: true,
          color: this.prepareColor(color)
        }
      }
      this.setupChartLabels();
    }

  }

  // UGGGGGHH WHY APEX GRAPHICS?!
  private prepareColor(color: string) {
    // getPropertyValue may return white spaces. Fuck this.
    color = color.trim();
    if (color.length < 7 && color.length >= 4) {
      color = color[0] + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
    }
    return color;

  }

  private setupChartLabels() {
    this.ageChartLabels = this.ageGroup.map(elem => this.translate.instant('data.ageGroup.' + elem));
  }

  private updateLabels() {
    this.setupChartLabels();
    this.charts.forEach(c => c.updateOptions({
      labels: this.ageChartLabels
    }));
  }


}
