import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TontineService } from 'src/app/services/tontine.service';

@Component({
  selector: 'app-card-tontines',
  templateUrl: './card-tontines.component.html'
})
export class CardTontinesComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  tontines: [] = [];

  constructor(private tontineService: TontineService, private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      code: '',
      designation: '',
      frequence: '',
      cotisation: ''
    });

    this.loadTontines();

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

    this.tontineService.addTontine(this.form.getRawValue()).subscribe(
      (res) => {
        console.log("tontine add successfully", res)
      },
      (err: HttpErrorResponse) => {
        console.log("error occured", err)
      }
    )

    this.loadTontines();

  }

  loadTontines(){

    this.tontineService.getAllTontines().subscribe(
      (res:any) => {
        this.tontines = res;
      }
    )

  }

}
