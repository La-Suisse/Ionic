import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private keyboard: Keyboard
  ) {
    this.initializeApp();
  }
  theme = ""
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  blackWhite() {
    if (this.theme == "") {
      this.theme = "dark"
      //this.keyboard.setKeyboardStyle("dark")
    }
    else {
      this.theme = "";
    }
  }
}
