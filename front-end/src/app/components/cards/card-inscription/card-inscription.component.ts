import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inscription } from 'src/app/@models/inscription';
import { TontineService } from 'src/app/services/tontine.service';

@Component({
  selector: 'app-card-inscription',
  templateUrl: './card-inscription.component.html'
})
export class CardInscriptionComponent implements OnInit {

  form: FormGroup;
  tontines: [] = [];
  adherents: [] = [];
  inscriptions: Inscription[] = [];
  nbcot;
  idtontine;
  idadherent;
  InputAdherent;
  InputDesignation;

  constructor(private fb: FormBuilder, private tontineService: TontineService) { }

  ngOnInit() {

    this.form = this.fb.group({
      matricule: '',
      nom: '',
      prenom: '',
      code_tontine: '',
      designation: '',
      nbre_cot: '',
      cot_rest: ''
    });

    this.loadData();
    this.loadInscriptions();

  }

  loadData() {
    this.tontineService.getAllAdherents().subscribe(
      (res:any) => {
        this.adherents = res;
      }
    )

    this.tontineService.getAllTontines().subscribe(
      (res:any) => {
        this.tontines = res;
      }
    )
  }

  onDesignationChange(){
    this.idtontine = this.InputDesignation.split(' ')[0];
    console.log("id tontine", this.idtontine);
    this.tontineService.getTontineById(this.idtontine).subscribe(
      (res:any) => {
        this.form.patchValue({
          code_tontine: res.code,
          designation: res.designation
        })
      }
    )
  }

  onAdherentChange(){
    this.idadherent = this.InputAdherent.split(' ')[0];
    console.log("id adherent", this.idadherent);
    this.tontineService.getAdherentById(this.idadherent).subscribe(
      (res:any) => {
        this.form.patchValue({
          matricule: res.matricule,
          nom: res.nom,
          prenom: res.prenom,
          cot_rest: this.nbcot
        })
      }
    )
  }

  save() {

    this.tontineService.addSouscription(this.form.getRawValue()).subscribe(
      (res) => {
        console.log("souscrption bien ajoutée", res);
      }
    )

    this.loadInscriptions();

  }

  loadInscriptions(){

    this.tontineService.getAllSouscriptions().subscribe(
      (res:any) => {
        this.inscriptions = res;
      }
    )

  }

}
