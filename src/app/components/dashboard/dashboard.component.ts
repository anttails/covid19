import { Component, OnInit } from '@angular/core';
import { VostptService } from 'src/app/services/vostpt.service';
import { Update, SINTOMASLIST } from 'src/app/models/update.model';
import { faExclamationTriangle, faSpinner, faVirus, faCross, faThumbsUp, faHospital, faProcedures, faVial, faExclamationCircle, faNotesMedical, faVirusSlash, faHeadSideVirus, faPlaneArrival, faUsers, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { version } from '../../../../package.json';

@Component({
  selector: 'c19-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  LANG_KEY: string = 'lang';
  lang: string;
  langs: string[] = ['pt', 'en'];

  error: boolean = false;
  loading: boolean = true;

  //apiIcon: IconDefinition = faHourglass;
  bigIcon: IconDefinition = faSpinner;

  currData: Update;
  prevData: Update;

  warning: IconDefinition = faExclamationTriangle;

  confirmados: IconDefinition = faVirus;
  obitos: IconDefinition = faCross;
  recuperados: IconDefinition = faThumbsUp;
  internados: IconDefinition = faHospital;
  uci: IconDefinition = faProcedures;
  lab: IconDefinition = faVial;
  suspeitos: IconDefinition = faExclamationCircle;
  vigilancia: IconDefinition = faNotesMedical;
  nConfirmados: IconDefinition = faVirusSlash;
  cadeiasTransmissao: IconDefinition = faUsers;
  transmissaoImportada: IconDefinition = faPlaneArrival;

  sintomas: IconDefinition = faHeadSideVirus;

  sintomasLst: string[] = SINTOMASLIST;

  fatalityRate: number;

  version: string = version;

  constructor(protected vostptService: VostptService, protected translate: TranslateService) { }


  ngOnInit() {
    this.lang = localStorage.getItem(this.LANG_KEY) || this.translate.getDefaultLang();
    this.setLang();

    this.vostptService.getData().subscribe(
      data => {
        this.loading = false;
        //this.apiIcon = faCheck;
        this.currData = data.latest;
        this.fatalityRate = (this.currData['obitos'] / this.currData['confirmados']) * 100;
        this.prevData = data.comparison;
      },
      err => {
        this.loading = false;
        this.error = true;
        //this.apiIcon = faExclamationTriangle;
        this.bigIcon = faExclamationTriangle;
        console.error(err);
      }
    );

  }

  setLang() {
    this.translate.setDefaultLang(this.lang);
    localStorage.setItem(this.LANG_KEY, this.lang);
  }

}
