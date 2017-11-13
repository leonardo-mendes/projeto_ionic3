import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
Provider é praticamente um provedor de informação, utilizamos para encapsular para o consumo dos objetos.
Vamos utilizar um provider para praticamte todos os desenvolvimentos

ionic generate provider nome_do_provider

*/
@Injectable() // Vai ser feito via injeção de dependencias
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
  
  private apiKey():string{
    return "9ae8e12efcccf98ab619dcd1a1d6f538";
  }

  getLatestMovies(page = 1){ // Como o page ja esta declarado se alguem não passar ele ja vai setar 1 como padrão
    // http é um objeto ja instanciado automaticamente
     return this.http.get(this.baseApiPath + "/movie/popular?page="+page+"&api_key=" + this.apiKey());
  }

  getMoviesDetails(idmovie){
    // http é um objeto ja instanciado automaticamente
     return this.http.get(this.baseApiPath + "/movie/"+ idmovie +"?api_key=" + this.apiKey());
  }
}
