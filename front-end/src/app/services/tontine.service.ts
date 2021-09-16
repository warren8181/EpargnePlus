import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TontineService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  addTontine(data){
    return this.httpClient.post(this.baseUrl + "newton", data);
  }


  getAllTontines(){
    return this.httpClient.get(this.baseUrl + "allton");
  }

  getTontineById(id){
    return this.httpClient.get(this.baseUrl + "gettonbyid/" + id);
  }

  addAdherent(data){
    return this.httpClient.post(this.baseUrl + "newmember", data);
  }

  getAllAdherents(){
    return this.httpClient.get(this.baseUrl + "allmembers");
  }

  getAdherentById(id){
    return this.httpClient.get(this.baseUrl + "getmemberbyid/" + id);
  }

  addSouscription(data){
    return this.httpClient.post(this.baseUrl + "newsouscription", data);
  }

  getAllSouscriptions(){
    return this.httpClient.get(this.baseUrl + "allsouscriptions");
  }

  getMemberByTontine(code){
    return this.httpClient.get(this.baseUrl + "getMemberByTontine/" + code);
  }

  addCotisation(data){
    return this.httpClient.post(this.baseUrl + "newcotisation", data);
  }

  getAllCotisations(date){
    return this.httpClient.get(this.baseUrl + "allcotisations/" + date);
  }

  getTotalCotisations(date){
    return this.httpClient.get(this.baseUrl + "getTotal/" + date);
  }

  getDisctinctMembers(mat, code){
    return this.httpClient.get(this.baseUrl + "getDistinctMembers/" + mat + "/" + code);
  }

  getCountRowsByCode(code){
    return this.httpClient.get(this.baseUrl + "getCountRowsByCode/" + code);
  }

  addAssignment(data){
    return this.httpClient.post(this.baseUrl + "assigntontine", data);
  }

  getCountUsers(){
    return this.httpClient.get(this.baseUrl + "getCountUsers");
  }

}
