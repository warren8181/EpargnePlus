import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TontineService } from 'src/app/services/tontine.service';

@Component({
  selector: 'app-card-members',
  templateUrl: './card-members.component.html'
})
export class CardMembersComponent implements OnInit, AfterViewInit {

  form:FormGroup;
  members: [] = [];

  constructor(private tontineService: TontineService, private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      matricule: '',
      nom: '',
      prenom: '',
      tel: '',
      sexe: '',
      localisation: ''
    })
    
    this.loadAllAdherents();

  }

  ngAfterViewInit() {

    document.getElementById("btn-show").onclick = () => {
      document.getElementById("modal").classList.remove('hidden');
    }

    document.getElementById("cancel").onclick = () => {
      document.getElementById("modal").classList.add('hidden');
    }
  }

  save(){

    this.tontineService.addAdherent(this.form.getRawValue()).subscribe(
      (res) => {
        console.log("member added sucessfully", res);
      },
      (err: HttpErrorResponse) => {
        console.log("An error occured", err)
      }
    )

    this.form.reset();

    this.loadAllAdherents();

  }

  loadAllAdherents(){
    this.tontineService.getAllAdherents().subscribe(
      (res:any) => {
        this.members = res;
      }
    )
  }

}
