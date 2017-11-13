import { Injectable } from '@angular/core';

/*
Para validar o Login vamos utilizar LocalStorage
https://www.w3schools.com/html/html5_webstorage.asp
*/
@Injectable() // Vai ser feito via injeção de dependencias
export class ConfigLoginProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {

  }

  // Recupera os dados do localstorage
  getLoginData():any{
    // A notação || é como se fosse um OR, retorna isso ou isso
    return localStorage.getItem("config");
  }

  // Grava os dados do localstorage, o ? faz ele ser opcional
  setLoginData(showSlide?: boolean, name?:string, username?:string):any{
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    // Validações para se existir gravar na variavel
    if(showSlide){
      config.showSlide=showSlide;
    }

    if(name){
      config.name=name;
    }

    if(username){
      config.username=username;
    }

    // Localstorage so grava texto por isso convertemos o objeto JS para string
    localStorage.setItem("config", JSON.stringify(config));

  }

}
