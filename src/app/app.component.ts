import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { ConfigLoginProvider } from '../providers/configlogin/configlogin';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigLoginProvider
  ]
})
export class MyApp {
  rootPage:any; // Primeira página que ira rodar

  // Foi injetado a dependencia do configProvider no construtor
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, configProvider: ConfigLoginProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      // Tudo que esta aqui dentro é a ordem do que sera executado então aqui vamos validar se o slider ja foi aberto uma primeira vez
      let config = configProvider.getLoginData();
      if(config == null){
        this.rootPage = IntroPage;
        configProvider.setLoginData(false);
      }
      else{
        this.rootPage = TabsPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
