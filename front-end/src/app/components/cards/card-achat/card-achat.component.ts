import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/@models/assignment';
import { TontineService } from 'src/app/services/tontine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-achat',
  templateUrl: './card-achat.component.html'
})
export class CardAchatComponent implements OnInit {

  dateJ;
  tontines: [] = [];
  tontineSelected;
  adherents: any[] = [];
  avalisses: [] = [];
  num_ton = null;
  mat;
  matAval;
  mont_total;
  mont_rest;
  mont_A;
  mont_achat=0;
  mont_net=0;
  interval;
  countRows = null;
  assignment: Assignment;

  constructor(private tontineService: TontineService, private toastr: ToastrService) { }

  ngOnInit() {

    this.dateJ = new Date().toISOString().substring(0, 10);

    this.tontineService.getAllTontines().subscribe(
      (res: any) => {
        this.tontines = res
      }
    )

    this.tontineService.getTotalCotisations(this.dateJ).subscribe(
      (res) => {
        console.log(res);
        this.mont_total = res;
      }
    )

    this.assignment = new Assignment();

    this.observeField();

  }


  checkDatas() {
    this.num_ton = this.tontineSelected.split(' ')[0];
    if(this.tontineSelected.split(' ')[3] == 7){
      this.mont_A = 52 * this.tontineSelected.split(' ')[4];
    }
    else if(this.tontineSelected.split(' ')[3] == 30){
      this.mont_A = 12 * this.tontineSelected.split(' ')[4];
    }
    this.mont_rest = this.mont_A - this.mont_total;
    this.tontineService.getMemberByTontine(this.tontineSelected.split(' ')[1] + ' ' + this.tontineSelected.split(' ')[2]).subscribe(
      (res: any) => {
        this.adherents = res
      },
      (err: HttpErrorResponse) => {
        console.log('error', err)
      }
    )
    this.tontineService.getCountRowsByCode(this.tontineSelected.split(' ')[0]).subscribe(
      (res:any) => {
        this.countRows = res;
      },
      (err: HttpErrorResponse) => {
        console.log('error', err)
      }
    )

    this.assignment.num_tontine = this.num_ton;
    this.assignment.mont_achete = this.mont_A;

  }

  checkDataMat(){
    this.assignment.mat_benef = this.mat;
    this.tontineService.getDisctinctMembers(this.mat, this.tontineSelected.split(' ')[0]).subscribe(
      (res:any) => {
        this.avalisses = res;
      },
      (err: HttpErrorResponse) => {
        console.log('error', err)
      }
    )
  }

  observeField(){

    this.interval = setInterval(() => {
      console.log("interval called")
      if(isNaN(this.mont_A)){
        this.mont_net = 0;
      }
      else{
        this.mont_net = this.mont_A - this.mont_achat;
      }
      this.assignment.mat_avalisse = this.matAval;
      this.assignment.net = this.mont_net;
      this.assignment.prix_achat = this.mont_achat;
    }, 1000)

  }

  assigner(){

    clearInterval(this.interval);
    this.tontineService.addAssignment(this.assignment).subscribe(
      (res) => {
        console.log(res);
      }
    );
    this.toastr.success('Achat de tontine effectuée avec succès');

  }


}
