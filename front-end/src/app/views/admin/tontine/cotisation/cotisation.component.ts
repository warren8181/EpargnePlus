import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cotisation } from 'src/app/@models/cotisation';
import { Inscription } from 'src/app/@models/inscription';
import { TontineService } from 'src/app/services/tontine.service';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.css']
})
export class CotisationComponent implements OnInit {

  date;
  inscription: Inscription;
  cotisation: Cotisation;
  rowsCotisations: Cotisation[] = [];
  datas;
  montant_cot = 0;
  totalCotisation;
  cot;
  tontines: [] = [];
  InputDesignation;
  adherents: [] = [];
  settings = {
    columns: {
      matricule: {
        title: 'Matricule'
      },
      nom: {
        title: 'Nom'
      },
      prenom: {
        title: 'Prénom'
      }
    },
    attr: {
      class: 'table table-bordered'
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }

  }

  constructor(private tontineService: TontineService) { }

  ngOnInit() {

    this.date = new Date().toISOString().substring(0, 10);

    this.tontineService.getAllTontines().subscribe(
      (res:any) => {
        this.tontines = res;
      }
    )

    this.inscription = new Inscription();
    this.cotisation = new Cotisation();
    
    this.loadCotisations(this.date);

    this.checkTotalCotisations(this.date);

  }


  checkDatas(){

    this.tontineService.getMemberByTontine(this.InputDesignation.split(' ')[0] + ' ' + this.InputDesignation.split(' ')[1]).subscribe(
      (res:any) => {
        this.adherents = res
      },
      (err: HttpErrorResponse) => {
        console.log('error', err)
      }
    )

    this.cot = this.InputDesignation.split(' ')[2];

  }

  checkRowSelected(val){


    console.log(val);

    if(val.trim !== ''){

      this.inscription.code_tontine = val.code_tontine;
      this.inscription.nbre_cot = val.nbre_cot;
      this.montant_cot = this.cot * this.inscription.nbre_cot;
      this.cotisation.matricule = val.matricule;
      this.cotisation.nom = val.nom;
      this.cotisation.prenom = val.prenom;
      this.cotisation.cot = this.cot;
    }


  }

  cotiser(){
    
    this.cotisation.dettes = (this.montant_cot - this.cotisation.montantVerse).toString();

    this.tontineService.addCotisation(this.cotisation).subscribe(
      (res) => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log("error occured", err)
      }
    )

    this.checkTotalCotisations(this.date);
    this.loadCotisations(this.date);
    
  }

  loadCotisations(date){
    this.tontineService.getAllCotisations(date).subscribe(
      (res:any) => {
        console.log(res);
        this.rowsCotisations = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

  checkTotalCotisations(date){
    this.tontineService.getTotalCotisations(date).subscribe(
      (res) => {
        console.log("total cotisation", res)
        this.totalCotisation = res;
      },
      (err: HttpErrorResponse) => {
        console.log("total cotisation", err)
      }
    )
  }
  
}
