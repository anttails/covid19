import { Component, OnInit } from '@angular/core';
import { VostptService } from 'src/app/services/vostpt.service';
import { Update } from 'src/app/models/update.model';
import { faExclamationTriangle, faSpinner, faVirus, faCross, faThumbsUp, faHospital, faProcedures, faVial, faExclamationCircle, faNotesMedical, faVirusSlash, faHeadSideVirus, faPlaneArrival, faUsers } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'c19-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  LANG_KEY = 'lang';
  lang;
  langs = ['pt', 'en'];

  error = false;
  loading = true;

  //apiIcon = faHourglass;
  bigIcon = faSpinner;

  currData: Update;
  prevData: Update;

  warning = faExclamationTriangle;

  confirmados = faVirus;
  obitos = faCross;
  recuperados = faThumbsUp;
  internados = faHospital;
  uci = faProcedures;
  lab = faVial;
  suspeitos = faExclamationCircle;
  vigilancia = faNotesMedical;
  nConfirmados = faVirusSlash;
  cadeiasTransmissao = faUsers;
  transmissaoImportada = faPlaneArrival;

  sintomas = faHeadSideVirus;

  sintomasLst = [
    'tosse',
    'febre',
    'dificuldade_respiratoria',
    'cefaleia',
    'dores_musculares',
    'fraqueza_generalizada'
  ]

  fatalityRate: number;

  constructor(protected vostptService: VostptService, protected translate: TranslateService) { }


  ngOnInit() {
    this.lang = localStorage.getItem(this.LANG_KEY) || this.translate.getDefaultLang();
    this.setLang();

    this.vostptService.getData().subscribe(
      data => {
        this.loading = false;
        //this.apiIcon = faCheck;
        this.currData = data.latest;
        this.sintomasLst = this.sintomasLst.sort((a, b) => this.currData['sintomas_' + b] - this.currData['sintomas_' + a]);
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
