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

  // Criando Objeto JSON
  public objetoFeed = {
    titulo:"Leonardo Mendes",
    data:"Novembro, 5 de 2017",
    descricao:"Texto simples para teste de JSON",
    qntd_likes:3,
    qntd_comments:15,
    time_comment: "11h ago"
  }

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
