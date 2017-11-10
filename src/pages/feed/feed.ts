import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

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
  providers:[ // Aqui que carregamos a instancia para utilizar o Provider
    MoovieProvider
  ]
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

  // Foi criado uma lista genérica para receber o JSON
  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider // aqui vamos criar um objeto do provider, sempre dentro do constructor
  ) {
  }

  // Criando função
  public somaDoisNumero(num1:number, num2:number): number{
      return num1+num2;
  }

  ionViewDidLoad() {
    /*Nessa area mostra as funções depois da tela carregada*/
    //console.log('ionViewDidLoad FeedPage');

    // Esse método chame o metodo do Provider, usamos o subscribe para validar a resposta da requisição
    this.movieProvider.getLatestMovies().subscribe(
      // Os parametros desse metodo é um valor de sucesso e uma falha
      data => {
        const response = (data as any); // Transformamos a resposta em um objeto sem tipagem, pois ai conseguimos pegar o seu valor de qualquer maneira
        const objretorno = JSON.parse(response._body); // transformamos em JSON
        this.lista_filmes = objretorno.results; // nossa lista vai receber o conteudo
        console.log(objretorno);
      }, error => {
        console.log(error);
      }
    )

    // nome => é como se fosse declarado uma função na mesma linha, no exemplo acima
    // data seria 
    //  data(){
    //   console.log(data);
    //  }
  }

}
