import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  // Criando Variavel
  public nomeUsuario:string = "Leonardo Carvalho Mendes";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Criando função
  public somaDoisNumero(num1:number, num2:number): number{
      return num1+num2;
  }

  ionViewDidLoad() {
    /*Nessa area mostra as funções depois da tela crregada*/
    //console.log('ionViewDidLoad FeedPage');
  }

}
