import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the MoviedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html',
  providers: [
    MoovieProvider
  ]
})
export class MoviedetailsPage {

  public filme;
  public idmovie;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MoovieProvider
  ) {
  }

  ionViewDidLoad() {
    // Essa função abaixo pegaria todos os parametros passados por navegação porem so queremos o id
    this.idmovie = this.navParams.get("id");

    // Ja utilizamos uma função muito parecida no feed.ts
    this.movieProvider.getMoviesDetails(this.idmovie).subscribe(
      data => {
        let response = (data as any)._body;
        this.filme = JSON.parse(response); 
      }, error =>{
        console.log(error);
      }
    )

  }

}
