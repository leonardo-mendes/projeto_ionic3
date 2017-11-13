import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { MoviedetailsPage } from '../moviedetails/moviedetails';

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
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

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
    private movieProvider: MoovieProvider, // aqui vamos criar um objeto do provider, sempre dentro do constructor
    public loadingCtrl: LoadingController
  ) {
  }

  // Criando função
  public somaDoisNumero(num1:number, num2:number): number{
      return num1+num2;
  }

  ionViewDidEnter() {
      this.loadMovies();
  }

  // Criando a msg de carregando
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  // Fechando a msg de carregando
  closeLoading(){
    this.loader.dismiss();
  }

  // Função de carregar a página quando puxar para baixo a tela
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadMovies();
  }

  // Função de carregar o Scroll
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll=infiniteScroll;
    this.loadMovies(true); // Toda vez que bater no final da pagina sempre iremos carregar masi filmes
  }

  // Aqui é a função que abre o detalhe da página
  openDetail(filme){
    // Sempre pudemos passar 3 parametros, nesse caso passamos a pagina e o id do filme para tratamento no ts do moviedetail
    console.log(filme.id);
    this.navCtrl.push(MoviedetailsPage, {id: filme.id});
  }

  loadMovies(newpage: boolean = false){
        // Iniciamos  com a msg de carregando e quando iniciar o primeiro serviço fechamos ela
        this.presentLoading() ;
        /*Nessa area mostra as funções depois da tela carregada*/
    
        // Esse método chame o metodo do Provider, usamos o subscribe para validar a resposta da requisição
        this.movieProvider.getLatestMovies(this.page).subscribe(
          // Os parametros desse metodo é um valor de sucesso e uma falha
          data => {
            const response = (data as any); // Transformamos a resposta em um objeto sem tipagem, pois ai conseguimos pegar o seu valor de qualquer maneira
            const objretorno = JSON.parse(response._body); // transformamos em JSON
            
            // Esse If surge depois que criamos o metodo de scroll, qual a funcionalidade proposta:
            // declaramos um newpage boolean para saber quando que temos que carregar mais filmes
            // então se o newpage for true devemos carregar mais filmes então concatenamos a lista com o seu proximo resultado, por isso chamos o retorno novamente, sneão so traz a lista
            if(newpage){
              this.lista_filmes = this.lista_filmes.concat(objretorno.results);
              this.infiniteScroll.complete(); // Terminamos o Scroll
            }
            else{
              this.lista_filmes = objretorno.results; // nossa lista vai receber o conteudo
            }
            
            console.log(objretorno);
            this.closeLoading();
            if(this.isRefreshing){
              this.refresher.complete();
              this.isRefreshing = false;
            }
          }, error => {
            console.log(error);
            this.closeLoading();
            if(this.isRefreshing){
              this.refresher.complete();
              this.isRefreshing = false;
            }
          }
        )
        // nome => é como se fosse declarado uma função na mesma linha, no exemplo acima
        // data seria 
        //  data(){
        //   console.log(data);
        //  }
  }

}
